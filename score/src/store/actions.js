export default{
    addNum({commit,state},id){
        state.answer.push(id)
        console.log(state.answer)
        if(state.item_num<state.itemDetail.length){
            commit('ADD_ITEMNUM',1)
        }
    },
    initData({commit}){
        commit('INITDATA')
    }
}