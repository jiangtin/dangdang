import { createStore } from 'vuex'
// import Vuex from 'vuex'


export default createStore({
  state: {
    list:[],
    user:'',
    password:''
  },
  getters: {
  },
  mutations: {
    add(state,m){
      // 加入购物车的函数
      if(state.list.indexOf(m) > -1){
        state.list[state.list.indexOf(m)].num+=1
        }
        else{
          state.list.push(m)

        }
    }
  },
  actions: {
  },
  modules: {
  }
})
