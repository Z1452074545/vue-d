<template>
  <div>
      <headss faterTitle="waiter"></headss>
       <!-- 轮播图 -->
       <div class="waiter_pic">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="../../static/img/banner1.png"></mt-swipe-item>
          <mt-swipe-item><img src="../../static/img/banner2.png"></mt-swipe-item>
          <mt-swipe-item><img src="../../static/img/banner1.png"></mt-swipe-item>
        </mt-swipe>
        </div>
        <!-- 公告 -->
        <div class="notice">
          <div class="notice_left">
            公告:
          </div>
          <div class="notice_right">
            <P>用Apple Pay刷手机一卡通,叮的一声就通行！ 用Apple Pay刷手机一卡通,叮的一声就通行！</P>
          </div>
        </div>
        <!-- menu bar -->
        <div class="menuBar">
          <div v-for="item,index in menuBar"><img :src="item.listImg" ></div>
        </div>
        <!-- see more -->
        <div class="seeMore">
          <span>旗舰店</span>
          <span>查看更多</span>
        </div>
        <!-- recommend -->
        <div class="recommend">
          <div class="cont1">
            <div class="cont1_txt">
              <p>热销商品</p>
              <p>迪士尼维尼小熊系列</p>
              <p><span>HOT</span></p>
            </div>
            <div class="cont1_img">
              <img src="../../static/img/recommend1.png" >
            </div>
          </div>
          <div class="cont2">
            <div class="cont2_txt cont1_txt">
              <p>热门推荐</p>
              <p>平安招财猫系列</p>
            </div>
            <div class="cont2_img">
              <img src="../../static/img/recommend2.png">
            </div>
          </div>
          <div class="cont3">
            <div class="cont3_txt">
              <p>黑金十二星座</p>
              <p>迷你矩形卡</p>
            </div>
            <div class="cont3_img">
              <img src="../../static/img/recommend3.png">
            </div>
          </div>
          <div class="cont3">
            <div class="cont3_txt">
              <p>迪士尼系列</p>
              <p>版权软胶卡卡</p>
            </div>
            <div class=" cont4_img">
              <img src="../../static/img/recommend4.png">
            </div>
          </div>
        </div>
        <!-- seeMore -->
        <div class="seeMore">
          <span>合作景点套票</span>
          <span>查看更多</span>
        </div>
        <!-- scenic -->
        <div class="scenic">
          <div class="scenic_cont" v-for="item,index in scenic" @click="Saoping(index)">
            <div class="sc_co_txt">
              <p>{{item.scenicTitle}}</p>
              <p><span>￥{{item.scenicTickets}}元</span><span><del>￥{{item.scenicOriginal}}元</del></span></p>
              <p>{{item.scenicPastdue}}</p>
            </div>
            <div class="sc_co_Img" >
              <img :src="item.scenicImg" >
            </div>

          </div>
        </div>
      
      <tabbar></tabbar>
  </div>
</template>

<script>
var menuBar=[
  {
    listImg:"../../static/img/title1.png"
  },
  {
    listImg:"../../static/img/title2.png"
  },
  {
    listImg:"../../static/img/title3.png"
  },
  {
    listImg:"../../static/img/title4.png"
  },
  {
    listImg:"../../static/img/title5.png"
  },
  {
    listImg:"../../static/img/title6.png"
  },
  {
    listImg:"../../static/img/title7.png"
  },
  {
    listImg:"../../static/img/title8.png"
  },
];
var scenic=[
  {
    scenicImg:"../../static/img/scenic1.png",
    scenicTitle:"圆明园",
    scenicTickets:25.00, 
    scenicOriginal:35.00,
    scenicPastdue:"套票250天后过期"
  },
  {
    scenicImg:"../../static/img/scenic2.png",
    scenicTitle:"鸟巢",
    scenicTickets:106.00, 
    scenicOriginal:110.00,
    scenicPastdue:"套票282天后过期"
  },
  {
    scenicImg:"../../static/img/scenic3.png",
    scenicTitle:"十三陵神路",
    scenicTickets:25.00, 
    scenicOriginal:30.00,
    scenicPastdue:"套票250天后过期"
  }
]
import tabbar from '../page/footer'
import headss from '../page/header'
import Bus from '../page/bus'
import Axios from 'axios'
export default {
  name:"column",
  components:{tabbar,headss},
  data(){
    return{
      menuBar:menuBar,
      scenic:scenic,
      e:0,
    }
  },
  methods:{
    Saoping(index){
      this.e=index;
      this.$router.push({
          path: 'saoping',
          query:{goodId:index}
          })
    }
  }

}
</script>

<style>
html,body{
  background: #f5f5f5;
  font-family: Arial, Helvetica, sans-serif;
}
.waiter_pic{
  width: 100%;
  height: 2rem;
}
.waiter_pic img{
   width: 100%;
  height: 100%;
}
.notice{
  width: 100%;
  height: 0.6rem;
  background: #ffedd8;
  font-size: 0.28rem;
  color: #d29b4f;

}
.notice div{
  float: left;
  text-align: center;
  line-height: 0.6rem;
}
.notice_left{
  width: 25%;
  height: 0.6rem;
}
.notice_right{
  width: 75%;
  height: 0.6rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  overflow: hidden;
}
.notice_right p{
  width: 12rem;
  animation:change 20s linear infinite;
}
@keyframes change{
    0%{
        margin-left:0;
    }
    100%{
        margin-left:-12rem;
    }
}
.menuBar{
  width: 100%;
  height: 2.6rem;
}
.menuBar div{
  float: left;
  width: 25%;
  height: 1.3rem;
}
.menuBar div img{
  width: 100%;
  height: 1.3rem;
}
.seeMore{
  width: 100%;
  height: 0.8rem;
  margin: 0.2rem auto;
  font-size: 0.34rem;
  background: #fff;
  color: #9d9d9d;
}
.seeMore span{
  width: 2.3rem;
  height: 0.8rem;
  line-height: 0.8rem;
  display:block;
  float: left;
  text-align: center;
}
.seeMore span:nth-child(2){
  float: right;
  color: rgb(33,33,33)
}
/* recommend */
.recommend{
  width: 100%;
  height: 4rem;
}
.recommend div{
  float: left;
  padding-left: 0.11rem;
  padding-right: 0.11rem;
  box-sizing: border-box;
  background: #fff;
}
.cont1{
  width: 40%;
  height: 4rem;
}
.cont2{
  width: 60%;
  height: 2rem;
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  box-sizing: border-box;
}
.cont3{
  width: 30%;
  height: 2rem;
  border-left: 1px solid #f5f5f5;
  box-sizing: border-box;
  background: chocolate;
}
.cont1_txt{
  font-size: 0.28rem;
  padding-top: 0.3rem;
}
.cont1_txt p:nth-child(1){
  font-size: 0.43rem;
  color: #47a8f7;
}
.cont1_txt p:nth-child(2){
  font-size: 0.23rem;
  color: #d2d2d2;
}
.cont1_txt p:nth-child(3) span{
  display: block;
  font-size: 0.23rem;
  color: #ff0634;
  width: 0.6rem;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.1rem;
  border: 1px solid #ff0634;
}
.cont1_img{
  margin-top: 0.3rem;
}
.cont1_img img{
  width: 100%;
  height: 2rem;
}
.cont2 div{
  float: left;
}
.cont2_img{
  width: 1.6rem;
  margin-top: 0.2rem;
}
.cont2_img img{
  width: 100%;
  height: 1.6rem;
}
.cont3_txt{
  margin-top: 0.2rem;
}
.cont3_txt p:nth-child(1){
 font-size: 0.24rem;
}
.cont3_txt p:nth-child(2){
 font-size: 0.22rem;
 color: #d2d2d2;
}
.cont3_img{
  margin-left: 0.3rem;
}
.cont3_img img{
  width: 1.2rem;
  height: 0.6rem;
}
.cont4_img img{
  width: 0.8rem;
  height: 0.8rem;
}
.cont4_img{
  margin-left: 0.5rem;
}
.scenic_cont{
  font-size: 0.26rem;
  width: 100%;
  height: 3rem;
}
.sc_co_txt{
  width: 45%;
  height: 3rem;
  float: left;
  box-sizing: border-box;
  padding: 0.2rem 0.1rem;
}
.sc_co_txt p{
  margin-top: 0.15rem;
}
.sc_co_txt p:nth-child(1){
  font-size: 0.36rem;
}
.sc_co_txt p:nth-child(2){
  font-size: 0.32rem;
}
.sc_co_txt p:nth-child(2) span:nth-child(1){
  color: #ffc872;
  margin-right: 0.2rem;
}
.sc_co_txt p:nth-child(2) span:nth-child(2){
  color: #999;
}
.sc_co_txt p:nth-child(3){
  font-size: 0.30rem;
}
.sc_co_Img{
  float: right;
  margin-right: 0.2rem;
  margin-top: 0.25rem;
}
.sc_co_Img img{
  width: 3rem;
  height: 2rem;
}
.scenic{
  background: #fff;
}



</style>
