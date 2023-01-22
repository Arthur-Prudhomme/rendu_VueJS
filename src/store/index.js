import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts:[
      {
          name: 'John',
          num: '0608060806'
      },
      {
          name: 'Smith',
          num: '0708070807'
      }
  ],
  callHist:[]
  },
  getters: {
  },
  mutations: {
    call(state, appel){
      state.callHist.push(appel)
    },
    ajoutContact(state, contact){
      state.contacts.push(contact)
    }
  },
  actions: {
  },
  modules: {
  }
})
