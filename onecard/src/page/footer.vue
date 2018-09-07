<template>
  <div>
    <div class="foot_box">
      <!-- <div v-for="item,index in footTitle" :class="{actiov:index==sIndex}" @click="but1(index)">{{item}}</div> -->
      <router-link to="/"><div>首页</div></router-link>
      <router-link to="/waiter"><div>服务</div></router-link>
      <router-link to="/column"><div>卡卷</div></router-link>
      <router-link to="/user"><div>个人</div></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      footTitle:['首页','服务','卡卷','个人'],
      sIndex:0,
    }
  },
  methods:{
    but1(index){
      this.sIndex=index;
    }
  }

}
</script>

<style>
.foot_box{
  width: 100%;
  height: 0.8rem;
  border-top: 1px solid #ccc;
  background: #f8f7f8;
  position:fixed;
  bottom: 0;
  left: 0;
}
.foot_box div{
  width: 25%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  font-size: 0.18rem;
  float: left;
}
.actiov{
  color: blue;
}

</style>
