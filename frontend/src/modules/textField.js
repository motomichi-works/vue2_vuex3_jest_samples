import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const state = () => ({
  label: 'label from state',
  value: 'value from state',
})

const getters = {

}

const actions = {

}

const mutations = {

}

export default new Vuex.Store({
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  modules: {

  },
})
