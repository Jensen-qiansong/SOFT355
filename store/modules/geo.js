// /* 通过SSR在服务端渲染的时候拿到找个数据，显示目前所在的城市 */
// /* 实现方式vuex */
// const state = () => ({
//   position: {}
// })

// const mutations = {
//   setPosition(state, val) {
//     state.position = val
//   }
// }

// const actions = {
//   setPosition: ({
//     commit
//   }, position) => {
//     commit('setPosition', position)
//   }
// }

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions
// }

const state = () => ({position: {}})

const mutations = {
  setPosition(state, val) {
    state.position = val
  }
}

const actions = {
  setPosition: ({
    commit
  }, position) => {
    commit('setPosition', position)
  }
}

export default {namespaced: true, state, mutations, actions}
