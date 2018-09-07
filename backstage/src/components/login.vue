<template>
  <div>
    <!-- 翡翠学院后台 -->
    <div class="box_login">
      <!-- 标题 -->
      <div class="login_title">
        <div class="login_login"><img src="../../static/img/login.png" ></div>
        <div class="login_txt">
          <p>翡翠学院后台</p>
          <p>the sysmaster of feicuischool</p>
        </div>
      </div>
      <!-- 用户输入框 -->
      <div class="login_input">
        <div class="input_user same_input">
          <div><img src="../../static/img/username.png"></div>
          <input type="text" placeholder="用户名" ref="userName">
        </div>
        <div class="input_password same_input">
          <div><img src="../../static/img/password.png"></div>
          <input type="password" placeholder="密码" ref="password">
        </div>
        <div class="input_code">
          <div><img src="../../static/img/password.png"></div>
          <input type="text" placeholder="验证码" ref="code">
        </div>
        <!-- 验证码 -->
        <div class="login_code">
          <var-code></var-code>
        </div>
      </div>
      <!-- 登录but -->
      <div class="login_butx">
        <div class="login_forget">忘记密码？</div>
        <div class="login_but" @click="login">登录</div>

      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import '../css/common.css'
import varCode from '../components/code'
export default {
  components:{varCode},
  data(){
    return{

    }
  },
  methods:{
    login(){
      Axios({
          url:'/Handler/AdminLoginHandler?action=checkveri',
          method:"get",
          params:{
            veri:this.$refs.code.value
          }
      }).then(res=>{
        if(res.data.success){
          this.nextLogin()
        }
      }) 
    },
    nextLogin(){
      Axios({
        url:'/Handler/AdminRegHandler?action=login',
        method:"post",
        data:{
          userName:this.$refs.userName.value,
          password:this.$refs.password.value,
        }
      }).then(res=>{
        if(res.data.success){
          this.$router.push("home")
          // window.l
        }
          console.log(res)
      })

    }
  }

}
</script>

<style>
/* 设置背景 */
body,html{
  background: rgb(12,26,78);
}
/* 输入框样式 */
.box_login{
  width: 650px;
  height: 350px;
  margin: 200px auto;
}
/* 输入框标题 */
.login_title{
  width: 300px;
  height: 50px;
  margin: 0 auto;
  position: relative;
}
.login_login{
  position: absolute;
  top: 5px;
  left: 30px;
}
.login_txt{
  position: absolute;
  top: 0px;
  left: 80px;
  color: #fff;
}
.login_txt p:nth-child(1){
  font-size: 24px;
}
.login_txt p:nth-child(2){
  font-size: 12px;
}
/* 设置输入框样式 */
.login_input{
  width: 440px;
  height: 220px;
  margin: 30px auto;
  position: relative;
}
/* 去input默认样式 */
.login_input input{
  border: none;
  outline: 0 none;
  background: rgb(12,26,78);
  width: 240px;
  height: 30px; 
  color:#ccc;
}
/* 设置input样式 */
.same_input{
  width: 440px;
  height: 40px;
  border: 1px solid #324a81;
  margin-top: 25px;
  line-height: 40px;
  font-size: 14px;
  color: rgb(115,116,105);
}
.same_input div{
  float: left;
  width: 35px;
  height: 40px;
  margin-right: 5px;
  border-right: 1px solid #324a81;
}
.same_input div img{
  margin-left: 10px;
  margin-top: 11px;
}
.input_code{
   width: 330px;
  height: 40px;
  border: 1px solid #324a81;
  margin-top: 25px;
  line-height: 40px;
  font-size: 14px;
  color: rgb(115,116,105);
}
.input_code div{
  float: left;
  width: 35px;
  height: 40px;
  margin-right: 5px;
  border-right: 1px solid #324a81;
}
.input_code div img{
   margin-left: 10px;
   margin-top: 11px;
}
/* 验证码 */
.login_code{
  position: absolute; 
  right: 10px;
  bottom: 45px;
  width: 80px;
  height: 40px;
  /* background: #deecbe; */
}
/* 登录but */
.login_butx{
  width: 560px;
  height: 40px;
  margin: 0 auto;
  position: relative;
}
.login_butx div{
  width: 115px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  color: #fff;
}
.login_forget{
  background: #1aafcd;
  position: absolute;
  left: 0;
}
.login_but{
  background: #20bb5c;
  position: absolute;
  right: 0;
}

</style>
