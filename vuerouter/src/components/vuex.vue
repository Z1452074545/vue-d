<template>
  <div>
      vuex 
      <!-- <button @click="$store.commit('reduce')">-</button> -->
      <button @click="reduceAction">-</button>
      {{num}}
      <!-- <button @click="$store.commit('add')">+</button> -->
      <button @click="addAction">+</button>
      <!-- {{this.$store.state.num}} -->
      </div>
  
</template>

<script>
import {mapState,mapMutations,mapGetters,mapActions} from "vuex"
export default {
    // computed:{ //计算属性
    //     num(){
    //         return this.$store.state.num
    //     }
    // },
    computed:{
        ...mapGetters(["num"])
    },
    // methods:mapMutations(['add','reduce']),
    // methods:{
    //     ...mapMutations(['add','reduce'])  //扩展运算符
    // }
    methods:mapActions(["addAction","reduceAction"])
}
</script>

<style>

</style>
