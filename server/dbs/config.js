let Email = {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    // get user() {
    //   return '1411818691@qq.com'
    // },
    // get pass() {
    //   /* 授权码 */
    //   return 'swawhbcmncznfeda'
    // },
    get code() {
      /* 生成验证码 */
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    get expire() {
      return () => {
        return new Date().getTime() + 60 * 60 * 60 * 1000
      }
    }
  },
}

export default Email
