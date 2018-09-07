import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        num:0
    },
    mutations:{
        add(state){
            state.num++
        },
        reduce(state){
            state.num--
        }
    },
    getters:{
        num(state){
            return state.num
        }
    },
    actions:{
        addAction(context){
            context.commit('add')
        },
        reduceAction({commit}){
            commit("reduce")
        }  
    }
})