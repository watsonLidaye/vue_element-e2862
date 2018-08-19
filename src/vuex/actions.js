const actions = {
  showLeftMenu({
    commit
  }, status) {
    commit('showLeftMenu', status)
  },
  showLoading({
    commit
  }, status) {
    commit('showLoading', status)
  },
  user({
    commit
  }, status) {
    commit('user', status)
  },
}

export default actions