<template>
  <div>
      <!-- <div class="head_box" v-for="item,index in title"> -->
      <div class="head_box">
          <!-- {{item}} -->
          <p v-if="faterTitle=='home'">首页<span><img src="../../static/img/main_2.png"></span></p>  
          <p v-if="faterTitle=='column'">卡卷<span><img src="../../static/img/main_2.png"></span></p>  
          <p v-if="faterTitle=='waiter'">服务<span><img src="../../static/img/main_2.png"></span></p>  
          <p v-if="faterTitle=='user'">个人<span><img src="../../static/img/main_2.png"></span> </p>  
      </div>
  </div>
</template>

<script>
export default {
    props:['faterTitle'],
    data(){
        return{
            title:['首页','服务','卡卷','个人']
        }
    }
}
</script>

<style>
.head_box{
    width: 100%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    background: #008dee;
    font-size: 0.38rem;
    font-weight: 500;
    color:#fff;
}
.head_box p{
    position: relative;
}
.head_box p span{
    position: absolute;
    top: 0.05rem;
    right: 0.3rem;
}
.head_box p span img{
    width: 0.4rem;
    height: 0.3rem;
}

</style>
