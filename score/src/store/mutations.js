const ADD_ITEMNUM='ADD_ITEMNUM'
const INITDATA='INITDATA'
export default{
    [ADD_ITEMNUM](state,num){
        state.item_num+=num
    },
    [INITDATA](state){
        state.chooseId=[];
        state.item_num=1;
    }

}