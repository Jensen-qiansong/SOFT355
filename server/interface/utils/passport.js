import passport from 'koa-passport' // 封装
import LocalStrategy from 'passport-local' //对所有node都适用的
import UserModel from '../../dbs/models/users' // 用户的模型 

passport.use(new LocalStrategy(async function (username, password, done) {
  let where = {
    username: username,
  };
  let result = await UserModel.findOne(where)
  if (result != null) {
    if (result.password === password) {
      return done(null, result)
    } else {
      return done(null, false, '密码错误')
    }
  } else {
    return done(null, false, '用户不存在')
  }
}))

// 自动通过session查询
passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  return done(null, user)
})


export default passport
