import Vue from "vue"
import Vuex from "vuex"
import zh_CN from '@/locale/zh_CN.json'
import zh_CNsteps from '@/locale/zh_CNsteps.json'
import en from '@/locale/en.json'
import ensteps from '@/locale/ensteps.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    // for language change
    lang: 'zh_CN',
    usedtxt: zh_CN,
    steps: zh_CNsteps,
    // for name input
    firstname: null,
    lastname: null,
    successMsg: { }
  },
  getters: {
    countValidNames: state => {
      let nameArr = []
      if(state.firstname){nameArr.push(state.firstname)}
      if(state.lastname){nameArr.push(state.lastname)}
      return nameArr.length
    },
    getSuccessMsg: state => {
      return {
        'title':state.successMsg.title,
        'message':state.successMsg.message,
        'img':state.successMsg.img
      }
    },
  },
  mutations :{
  setLang (state, value) {    
    if(value ==='zh_CN'){
      state.lang = 'zh_CN'
      state.usedtxt = zh_CN
      state.steps = zh_CNsteps
    }
    if(value ==='en'){
      state.lang = 'en'
      state.usedtxt = en
      state.steps = ensteps
    }
  },
  storeName (state, obj) {
    const { firstname, lastname } = obj
    state.firstname = firstname
    state.lastname = lastname
  },
  removeName (state) {
    state.firstname = null
    state.lastname = null
  },
  saveMsg (state, obj) {
    state.successMsg = obj
  }
}
});