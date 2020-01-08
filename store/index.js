// /* 这个文件夹直接就用到了主页面上了 */
// import Vue from 'vue'
// import Vuex from 'vuex'
// import geo from './modules/geo' // 引进来  然后在module里面引入，之后进行请求
// import home from './modules/home' // 引进了 然后在module里面引入，之后进行请求

// Vue.use(Vuex)

// const store = () => new Vuex.Store({
//   modules: {
//     geo,home
//   },
//   actions: {
//     async nuxtServerInit({commit}, { req,app}) {
//       const {status,data: {province,city}} = await app.$axios.get('/geo/getPosition')
//       commit ('geo/setPosition', status === 200 ? {city,province} : { city: '', province: ''})
//       const {status:status2,data:{menu}} = await app.$axios.get('geo/menu')
//       commit('home/setMenu',status2===200?menu:[]) 
//       const {status:status3,data:{result}}= await app.$axios.get('/search/hotPlace',{
//           params:{
//               city:app.store.state.geo.position.city.replace('市','')
//           }
//       })
//       commit('home/setHotPlace',status3===200?result:[])
//     }
//   }
// })
// export default store
import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({
      commit
    }, {req, app}) {
      const {
        status,
        data: {
          province,
          city
        }
      } = await app.$axios.get('/geo/getPosition')
      commit('geo/setPosition',status===200?{city,province}:{city:'',province:''})
      const {status:status2,data:{menu}}=await app.$axios.get('geo/menu')
      commit('home/setMenu',status2===200?menu:[])
      const {status:status3,data:{result}}=await app.$axios.get('/search/hotPlace',{
        params:{
          // city:app.store.state.geo.position.city.replace('市','')
        }
      })
      commit('home/setHotPlace',status3===200?result:[])
    }
  }
})

export default store
