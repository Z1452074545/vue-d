<template>
  <div>
    <header>
      <div v-if="fatherTitle=='home'" class="top_tip">{{itemDetail[0].active_topic_phase}}</div>
      <div v-if="fatherTitle=='item'" class="top_tip">{{itemDetail[0].topic_name}}</div>
    </header>
    <div class="content">
      <div v-if="fatherTitle=='home'">
        <router-link to="/item" class="btn_start"></router-link>
      </div>
      <div v-if="fatherTitle=='item'" >
        <ul class="li_txt">
          <p class="title">{{itemDetail[0].topic_name}}</p>
          <li v-for="item,index in itemDetail[item_num-1].topic_answer">
            <span class="reday_choose" :class="{has_choose:select==index}" @click="choosed(index,item.topic_answer_id)">{{choose(index)}}</span>{{item.answer_name}}
            </li>
        </ul>
        <div v-if="item_num<itemDetail.length" class="btn_next" @click="nextItem"></div>
        <div v-else class="but_submit" @click="submit"></div> 
      </div>
    </div>
  </div>
</template>


<script>
import '../css/common.css'
import {mapState,mapActions} from "vuex"
export default {
  data(){
    return{
         select:null,
         chooseId:null
    }
  },
  props:["fatherTitle"],
  computed:mapState([
    'itemDetail',
    'item_num'
    ]),
    methods:{
      choose:type=>{
      switch(type){
        case 0: return "A";
        case 1: return "B";
        case 2: return "C";
        case 3: return "D";

      }
    },
    choosed(index,id){
      this.select=index;
      this.chooseId=id;
    },
    ...mapActions(['addNum','initData']),
    nextItem(){
      if(this.chooseId!=null){
        console.log(this.chooseId)
        this.addNum(this.chooseId)
        this.select=null,
         this.chooseId=null
      }else{
        alert("未选中答案")
      }
    },
    submit(){
      if(this.chooseId!=null){
        console.log(this.chooseId)
        this.addNum(this.chooseId)
        this.select=null,
         this.chooseId=null
         this.$router.push('score')
      }else{
        alert("未选中答案")
      }

    },
    created(){
      this.initData();
    }
    }    
}
</script>

<style>

</style>
