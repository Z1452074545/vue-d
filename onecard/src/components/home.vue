<template>
  <div>
    <headss faterTitle="home"></headss>
    <div class="home_nav">
      <div v-for="item,index in homeTitle" @click="ToggleCursors(index)">{{item}}</div>
    </div>
    <!-- 选项 -->
    <div v-if="hide"> 
      <div class="slidingJaw">
        <div class="home_box">
        <div class="home_cont">
          <img src="../../static/img/ka.png">
          <p><span>卡号:</span>{{cardNumber}}<img src="../../static/img/main_1.png"><span class="CardStatus">{{CardStatus}}</span></p>
        </div>
        <div class="home_cont home_cont1">
          <img src="../../static/img/ka.png">
          <!-- <p><span>卡号:</span>{{cardNumber}}<img src="../../static/img/main_1.png"><span class="CardStatus">{{CardStatus}}</span></p> -->
        </div>
        </div>

      </div>
    
    <!-- 余额 -->
    <div class="balance">
      <p>余额:<span>{{balance}}</span>元</p>
    </div>
    <!-- 充值 -->
    <div class="recharge">充值</div>
    <!-- 更多功能 -->
    <div class="moreFunctions">
      <span>更多功能</span>
    </div>
    </div>
    <!-- 选项 -->
    <div v-if="hides">
      <div class="electronicCard">
        <div class="minCard">
          <img src="../../static/img/ka.png">
        </div>
        <!-- bg -->
        <div class="elCont">
          <div class="plaint">!</div>
          <p>{{reminderTxt}}</p>
          <!-- 立即开通 -->
          <div class="dredge">立即开通</div>

        </div>
        <!-- 查看已开通线路 -->
        <div class="circuit">查看已开通线路</div>
        

      </div>
    </div>


    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from '../page/footer'
import headss from '../page/header'
export default {
  name:"home",
  components:{tabbar,headss},
  data(){
    return{
      homeTitle:['手机一卡通','电子卡'],
      cardNumber:'1111 1111 1111 1111 1111',
      CardStatus:'已绑定',
      balance:64.19,
      hide:true,
      hides:false,
      reminderTxt:"您未开通电子卡功能，开启后出示二维码即可扫码乘车"
    }
  },
  methods:{
    ToggleCursors(index){
      if(index==0){
        this.hide=true; 
        this.hides=false; 
      }
      if(index==1){
        this.hide=false; 
        this.hides=true; 
      }

    }

  }
}
</script>

<style>
html,body{
  background: #f3f3f3;
}
img{
  width: 100%;
  height: 9rem;
}
.home_nav{
  width: 100%;
  height: 0.6rem;
  background: #008dee;
}
.home_nav div{
  width: 50%;
  height: 0.6rem;
  float: left;
  text-align: center;
  line-height: 0.6rem;
  font-size: 0.32rem;
  color: #fff;
}
.home_cont{
  width: 5.4rem;
  height: 4rem;
  margin: 0.5rem auto;
  background: #fff;
  border-radius: 0.15rem;
}
.home_cont img{
  width: 5.1rem;
  height: 3.2rem;
  margin: 0.15rem;
}
.home_cont{
  font-size: 0.24rem;
  color: rgb(180,180,180);
}
.home_cont p{
  position: relative;
}
.home_cont p span{
  margin-left: 0.1rem;
  margin-right: 0.2rem;
}
.home_cont p img{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: -0.13rem;
  right: 0.9rem;
}
.CardStatus{
  position: absolute;
  top: 0.015rem;
  right: 0.06rem;
}
/* 余额 */
.balance{
  width: 4rem;
  height: 1.5rem;
  margin: 0.7rem auto;
  font-size: 0.32rem;
  font-weight: 400;
  text-align: center;
  line-height: 1.5rem;
}
.balance span{
  font-size: 0.64rem;
  margin: 0 0.2rem;
  font-weight: 700;
}
/* 充值 */
.recharge{
  font-size: 0.42rem;
  width: 80%;
  height: 0.9rem;
  margin: -0.5rem auto;
  text-align: center;
  line-height: 0.9rem;
  background: red;
  color: #fff;
  background: #008dee;
  border-radius: 0.12rem;
}
/* 更多功能 */
.moreFunctions{
  width: 20%;
  height: 1rem;
  font-size: 0.26rem;
  margin: 0.9rem auto;
  text-align: center;
  
}
.moreFunctions span{
  border-bottom: 1px solid rgb(88,88,88);    
}
/* 电子卡 */
.electronicCard{
  width: 100%;
  height: 9.18rem;
  background: #038dee;
  position: relative;
}
.elCont{
  width: 90%;
  height: 8rem;
  background: #fff;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  margin-left: -45%;
  border-radius: 0.2rem;
}
/* 小卡 */
.minCard{
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #f2fbff;
  position: absolute;
  top: 0rem;
  left: 50%;
  margin-left: -0.5rem;
  z-index: 999;
  box-shadow: 0 0 0.3rem #ccc
}

.minCard img{
  width: 0.7rem;
  height: 0.5rem;
  display: block; 
  margin-top: 0.3rem;
  margin-left: 0.15rem;
}
.plaint{
  width: 1rem;
  height: 1.8rem;
  color: #ffc972;
  font-size: 1.6rem;
  text-align: center;
  line-height: 1.8rem;
  margin: 1.8rem auto ;
}
.elCont{
  padding: 0 0.5rem;
  box-sizing: border-box;
}
.elCont p{
  font-size: 0.22rem;
  margin-top: -1.5rem;
  text-align: center;
}
.dredge{
  width: 80%;
  height: 0.8rem;
  border: 1px solid #4aa2f2;
  font-size: 0.34rem;
  margin: 0.8rem auto;
  text-align: center;
  line-height: 0.8rem;
  color: #4aa2f2;
  border-radius: 0.1rem;
}
.circuit{
  width: 100%;
  height: 0.8rem;
  /* background: red; */
  position: absolute;
  bottom: 0.7rem;
  left: 0;
  background: rgba(3,141,238,0.2);
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.8rem;
  color: #038dee;
}
.slidingJaw{
  width: 100%;
  height: 5rem;
  overflow: auto;
}
.home_box div{
  float: left;
  margin-left: 0.2rem;
}
.home_box{
  width: 14rem;

}

</style>
