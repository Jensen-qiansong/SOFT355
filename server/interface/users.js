import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/users'
import Password from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'


let router = new Router({
  prefix: '/users' // 前缀
})

let Store = new Redis().client // 声明变量，获取redis的客户端

router.post('/signup', async (ctx) => { // 注册接口
  const {
    username,
    password,
    email,
    code
  } = ctx.request.body // post方式获取数据通过ctx.request.body
  if (code) {
    const saveCode = await Store.hget(`nodemail:${username}`, 'code') // 获取验证码
    const saveExpire = await Store.hget(`nodemail:${username}`, 'expire') // 过期时间
    if (code === saveExpire) {
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: '验证码已过期，请重新尝试'
        }
        return false
      }
    } else {
      ctx.body = {
        code: -1,
        msg: '请填写正确的验证码'
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: '请填写验证码'
    }
  }
  // 验证用户和密码
  let user = await User.find({
    username
  })
  if (user.length) {
    ctx.body = {
      code : -1,
      msg: '已被注册'
    }
    return
  }
  let nuser = await User.create({
    username,
    password,
    email
  })
  if (nuser) {
    let res = await axios.post('/users/signin', {
      username,
      password
    })
    if (res.data && res.data.code === 0) {
      ctx.body = {
        code: 0,
        msg: '注册成功',
        user: res.data.user
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "error"
      }
    }
  } else {
    ctx.body = {
      code: -1,
      msg: "注册失败"
    }
  }
})

// 登录接口
router.post('/signin', async (ctx, next) => {
  return Password.authenticate('local', function (err, user, info, status) { // 调用local策略
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      }
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: '登陆成功',
          user
        }
        return ctx.login(user)
      } else {
        ctx.body = {
          code: 1,
          msg: '登陆失败'
        }
      }
    }
  })(ctx, next)
})

router.post('/verify', async (ctx, next) => {
  let username = ctx.request.body.username
  const saveExpire = await Store.hget(`nodemail:${username}`, 'expire')
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: '验证请求太频繁了',
    }
    return false
  }
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    port: 587,
    secure: false, // 监听587端口
    auth: { // smtp 服务
      user: Email.smtp.user, // smtp腾讯邮箱校验
      pass: Email.smtp.pass
    }
  })
  let ko = { // 发邮箱对象
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.username,
  }
  let mailOptions = { // 邮箱接收什么
    from: `"认证邮件"<${Email.smtp.user}>`,
    to: ko.email, // 接收方
    subject: '《打造全栈攻城狮》注册码',
    html: `好久没联系了，家里蹲培训机构欢迎你，您的邀请码是${ko.code}`
  }
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('error')
    } else {
      Store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', 'email', ko.email)
    }
  })
  ctx.body = {
    code: 0,
    msg: '验证码已发送，有效期一分钟',
    ko
  }
})

// 退出接口
router.get('/exit', async (ctx, next) => {
  await ctx.logout()
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0,
    }
  } else {
    ctx.body = {
      code: -1
    }
  }
})

// 获取用户名
router.get('/getUser', async (ctx) => {
  if (ctx.isAuthenticated()) {
    const {
      username,
      email
    } = ctx.session.passport.user
    ctx.body = {
      user: username,
      email
    }
  } else {
    ctx.body = {
      user: '',
      email: ''
    }
  }
})


export default router
