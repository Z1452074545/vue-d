<template>
  <div>
      <headss faterTitle="user"></headss>
      <!-- title -->
      <div class="user_title">
        <div class="userImg">
          <img :src="userImg">
        </div>
        <div class="userphone"><p><span style="color:#fff;">{{userphone}}</span><img :src="usermImg"><span style="color:#80c6f6">{{autonym}}</span></p></div>
        <div class="usertxt">{{usertxt}}</div> 
      </div>
      <!-- 开通个人账户 -->
      <div class="dredges">
        <div class="dredges_left">开通个人账户</div>
        <div class="dredges_right">
          <p>{{integral}}</p>
          <p>积分</p>
        </div>
      </div>
      <!-- 订单 -->
      <div class="order_box">
        <div class="fction" v-for="item,index in user">
          <div class="contImg"><img :src="item.contImg"></div>
          <div class="contTxt">{{item.contTxt}}</div>
          <div class="user_right_but">></div>
        </div>
      </div>

      <tabbar></tabbar>
      
  </div>
</template>

<script>
import tabbar from '../page/footer'
import headss from '../page/header'
var user={
  userList:[
    {
      contImg:'../../static/img/user3.png',
      contTxt:'订单'
    },
    {
      contImg:'../../static/img/user4.png',
      contTxt:'企业集团账户'
    },
    {
      contImg:'../../static/img/user5.png',
      contTxt:'会员卡'
    },
    {
      contImg:'../../static/img/user6.png',
      contTxt:'支付方式'
    }
  ]
}
export default {
  name:"user",
  components:{tabbar,headss},
  data(){
    return{
      userImg:"../../static/img/user1.png",
      usermImg:'../../static/img/user2.png',
      userphone:13155555555,
      autonym:"已实名",
      usertxt:'签到换积分',
      user:user.userList,
      integral:0,
    }
  }

}
</script>

<style>
html,body{
  background: #f3f3f3;
}
.user_title{
  width: 100%;
  height: 2rem;
  position: relative;
  background: #008dee;
}
.userImg{
  position: absolute;
  top: 0.5rem;
  left: 0.3rem;
}
.userImg img{
  width: 1rem;
  height: 1rem;
}
.userphone{
  position: absolute;
  top: 0.6rem;
  left: 1.6rem;
  font-size: 0.28rem;
}
.userphone img{
  width: 0.3rem;
  height: 0.3rem;
  margin: 0 0.1rem;
}
.usertxt{
  width: 1.6rem;
  height: 0.5rem;
  border: 1px solid #80c6f7;
  font-size: 0.28rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 0.5rem;
  color: #80c6f6;
  position: absolute;
  top: 1.1rem;
  left: 1.5rem;
}
.dredges{
  width: 100%;
  height: 1.2rem;
  background: #fff;
}
.dredges div{
  float: left;
  width: 50%;
  height: 1.2rem;
  font-size: 0.32rem;
  text-align: center;
  
}
.dredges_left{
  line-height: 1.2rem;
}
.dredges_right{
  padding-top: 0.2rem;
  box-sizing: border-box;
}
.order_box{
  margin-top: 0.2rem;
  width: 100%;
  background: #fff;
}
.fction{
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #ececec;
  position: relative;
}
.contImg{
  position: absolute;
  top: -0.15rem;
  left: 0.2rem;
}
.contImg img{
  width: 0.5rem;
  height: 0.5rem;
}
.contTxt{
  font-size: 0.38rem;
  position: absolute;
  top: 0.38rem;
  left: 1.2rem;
  color: #333;
}
.user_right_but{
  position: absolute;
  font-size: 0.45rem;
  top: 0.1rem;
  right: 0rem;
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  color: #a4a4a4;
}
</style>
