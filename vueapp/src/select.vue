<template>
  <div>
      <div class="wrap">
          <list-doem1 btn="查询" :list="arr"></list-doem1>
      </div>
  </div>
</template>

<script>
import Vue from "vue"
Vue.component("list-doem1",{
    props:["btn","list"],
    data(){
        return{
            text:"",
        }
    },
    template:`<div>
                <div class="select">
                    <input type="text" v-model="text">
                    <input type="button" :value="btn">
                </div>
                <custom-list :lists="list" @receve="get"></custom-list>
    
              </div>`,
              methods:{
                  get(val){
                      this.text=val;
                  }
              }
})
Vue.component("custom-list",{
    props:["lists"],
    template:`<div class="list">
                  <ul>
                    <li v-for="item,index in lists" @click="send(item)">{{item}}</li>
                  </ul>
              </div>`,
              methods:{
                  send(item){
                      this.$emit("receve",item);

                  }
              }
})
export default {
    name:"selects",
    data(){
        return{
            name:"",
            arr:["vue","react","angsss"]

        }

    }

}
</script>

<style>

</style>
