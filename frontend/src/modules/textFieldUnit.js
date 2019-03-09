import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import textField from '@/modules/textField'

const state = () => ({
  title: 'TextFieldUnit.vue from state',
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
    textField,
  },
})
