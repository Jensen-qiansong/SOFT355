import Koa from 'koa'
const consola = require('consola')
const {
  Nuxt,
  Builder
} = require('nuxt')



var ws = require("nodejs-websocket")
var port=3101;
var user=0;
// Create a connection
var server = ws.createServer(function (conn) {
    console.log("Create a new connection    --------");
    user++;
    conn.nickname="anonymous" + user;
    var mes = {};
    mes.type = "enter";
    mes.data = conn.nickname + " Come in!"
    broadcast(JSON.stringify(mes));

    //Push the message to the client
    conn.on("text", function (str) {
        console.log("reply   "+str)
        mes.type = "message";
        mes.data = conn.nickname + " said:    " + str;
        broadcast(JSON.stringify(mes));
    });

    //Listen to close connection operations
    conn.on("close", function (code, reason) {
        console.log("Close the connection");
        mes.type = "leave";
        mes.data = conn.nickname+" left"
        broadcast(JSON.stringify(mes));
    });

    //Error handling
    conn.on("error", function (err) {
        console.log("Error detected");
        console.log(err);
    });
}).listen(port);

function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str);
    })
}

/*import ws from 'nodejs-websocket'
console.log("开始建立连接...")
 var server = ws.createServer(function(conn){
  conn.on("text", function (webText) {
    console.log("message:"+webText)
    conn.sendText(webText);
  })
  conn.on("close", function (code, reason) {
    console.log("关闭连接")
  });
  conn.on("error", function (code, reason) {
    console.log("异常关闭")
  });
}).listen(8001)
console.log("WebSocket建立完毕") */




// 包的加载
import mongoose from 'mongoose'
import bodyParser from 'koa-bodyparser' // 处理post请求 很重要
import session from 'koa-generic-session'
import Redis from 'koa-redis'
import json from 'koa-json' // json格式美观
import dbConfig from './dbs/config'
import passport from './interface/utils/passport'
import users from './interface/users' //users接口
import geo from './interface/geo' //geo接口
import search from './interface/search' //search接口
import categroy from './interface/categroy' //categroy接口
import cart from './interface/cart' //cart接口
import Order from './interface/order' //order接口
// import city from './interface/city' //city接口

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
      port = process.env.PORT || 3000
  } = nuxt.options.server

  app.keys = ['mt', 'keyskeys']
  app.proxy = true
  app.use(session({ // session的配置
    key: 'mt',
    prefix: 'mt:uid',
    store: new Redis()
  }))
  app.use(bodyParser({
    extendTypes: ['json', 'form', 'text']
  }))
  app.use(json())

  // 连接数据库 
  mongoose.connect(dbConfig.dbs, {
    useNewUrlParser: true
  })
  app.use(passport.initialize())
  app.use(passport.session())


  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(users.routes()).use(users.allowedMethods()) // 引进路由，users路由
  app.use(geo.routes()).use(geo.allowedMethods()) // 引进路由，geo路由
  app.use(search.routes()).use(search.allowedMethods()) // 引进路由，search路由
  app.use(categroy.routes()).use(categroy.allowedMethods()) // 引进路由，categroy路由
  app.use(cart.routes()).use(cart.allowedMethods()) // 引进路由，cart路由
  app.use(Order.routes()).use(Order.allowedMethods()) // 引进路由，order路由

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
