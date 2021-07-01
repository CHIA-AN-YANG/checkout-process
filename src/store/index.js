import Vue from "vue"
import Vuex from "vuex"
import zh_CN from '@/locale/zh_CN.json'
import zh_CNsteps from '@/locale/zh_CNsteps.json'
import en from '@/locale/en.json'
import ensteps from '@/locale/ensteps.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state : {
    lang: 'zh_CN',
    usedtxt: zh_CN,
    steps: zh_CNsteps,
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
  }
}
});