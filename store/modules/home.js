// /* 通过SSR在服务端渲染的时候拿到找个数据，显示目前所在的城市 */
// /* 实现方式vuex */
// const state = () => ({
//   menu: [],
//   hotPlace: [],
// })

// const mutations = {
//   setMenu(state, val) {
//     state.menu = val
//   },
//   setHotPlace(state, val) {
//     state.hotPlace = val
//   },
// }

// const actions = {
//   setMenu: ({
//     commit
//   }, menu) => {
//     commit('setMenu', menu)
//   },
//   setHotPlace: ({
//     commit
//   }, hotPlace) => {
//     commit('setHotPlace', hotPlace)
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }
const state = () => ({menu: [], hotPlace: []})

const mutations = {
  setMenu(state, val) {
    state.menu = val
  },
  setHotPlace(state, val) {
    state.hotPlace = val
  }
}

const actions = {
  setMenu: ({
    commit
  }, menu) => {
    commit('setMenu', menu)
  },
  setHotPlace: ({
    commit
  }, hotPlace) => {
    commit('setHotPlace', hotPlace)
  }
}

export default {namespaced: true, state, mutations, actions}
