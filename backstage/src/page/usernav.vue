<template>
  <div>
    <!-- 头部导航 -->
    <div class="nav_box">
      <!-- 一级 -->
      <div class="nav_stair">
        <div class="nav_loggo">
          <div class="login_login"><img src="../../static/img/login.png" ></div>
            <div class="login_txt">
              <p>翡翠学院后台</p>
              <p>the sysmaster of feicuischool</p>
            </div>
        </div>
        <div class="stair_img">
          <img src="../../static/img/login.png">
        </div>
        <div class="stair_right">
          <ul>
            <li><span><img src="../../static/img/nav1.png"></span>卓新思创</li>
            <li><span><img src="../../static/img/nav2.png"></span>在线客服</li>
            <li><span><img src="../../static/img/nav3.png"></span>常见问题</li>
            <li @click="safety"><span><img src="../../static/img/nav4.png"></span>安全中心</li>
            <li @click="quit"><span><img src="../../static/img/nav5.png"></span>退出</li>
            <li>{{userName}}</li>
          </ul>
        </div>
      </div>
      <!-- 二级 -->
      <div class="nav_second">
        <div class="nav_t">
        <ul>
          <li @click="butSuer"><span><img src="../../static/img/n1.png"></span>用户管理</li>
          <li @click="butStudent"><span><img src="../../static/img/n2.png"></span>课程管理</li>
          <li><span><img src="../../static/img/n3.png"></span>统计报表</li>
          <li><span><img src="../../static/img/n4.png"></span>其他管理</li>
          <li><span><img src="../../static/img/n5.png"></span>数据字典</li>
          <li><span><img src="../../static/img/n6.png"></span>系统维护</li>
        </ul>
        </div>
      </div>
    </div>


    
      <!-- 模态框 -->
      <div v-show="mtk" class="mtk">
      <div class="mtk_center">
      <div class="mtk_top">
        <ul>
          <li>修改密码</li>
          <li class="close" @click="close">×</li>
        </ul>
      </div>
      <div class="mtk_bottom">
        <div class="mtk_bottom_center">
          <div class="oldpw">
          <label for="oldPassword" >*当前密码：</label>
          <input id="oldPassword" type="text" ref="oldPassword">
        </div>
        <div class="newpw">
          <label for="newPassword">　*新密码：</label>
          <input id="newPassword" type="text" ref="newPassword">
        </div>
        <div class="qrnewpw">
          <label for="qrnewPassword">*确认密码：</label>
          <input id="qrnewPassword" type="text" ref="qrnewPassword">
        </div>
        <div class="mtk_btn">
          <div class="mtk_yes" @click="updatepass">确定</div>
          <div class="mtk_no" @click="cancel">取消</div>
        </div>
        </div>
      </div>
      </div>
    </div>


  </div>
</template>

<script>
import Axios from "axios"
import '../css/common.css'
export default {
  data(){
    return{
      mtk:false,
      userName:'',
    }
  },
  methods:{
    safety(){
      this.mtk=true;
    },
    close(){
      this.mtk=false;
    },
    getInfo(){
      Axios({
        url:'/Handler/AdminLoginHandler?action=returninfo',
        method:"get",
      }).then(res=>{
        this.userName=res.data.data.userName
      })
    },
    quit(){
      Axios({
         url:'/Handler/AdminLoginHandler?action=quit',
         method:"get",
      }).then(res=>{
        alert(res.data.success)
        if(res.data.success){
          this.$router.push('/')

        }
      })
    },
    updatepass(){
      if (this.$refs.newPassword.value === this.$refs.qrnewPassword.value) {
        Axios({
        url:'/Handler/AdminRegHandler?action=updatepass',
        method:"post",
        data:{
          password: this.$refs.oldPassword.value,
          newpass: this.$refs.newPassword.value
        }
      }).then(res=>{
        if(res.data.success){
          console.log(res)
        }

      })
      this.mtk=false;
      alert("修改成功")
      }else{
        alert("确认密码")
      }
      
    
    },
    cancel(){
      this.mtk=false;
    },
    butSuer(){
      this.$router.push("user")
    },
    butStudent(){
      this.$router.push('student')
    }
  },
  mounted(){
      this.getInfo();

  }
    
}
</script>

<style>
.nav_box{
  width: 100%;
  height: 100px;
  background: #ccc;
}
.nav_stair{
  height: 50px;
  background: #262626;
  color: #9f9b95;
  font-size: 14px;
}
.nav_second{
  height: 50px;
  background: linear-gradient(right,#465d97,#24305b);  
  color: #fff;
  font-size: 16px;
}
.nav_loggo{
  width: 300px;
  height: 50px;
  position: relative;
  float: left;
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
.stair_right{
  float: right;
}
.stair_right ul li{
  float: left;
  line-height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  cursor: pointer;
}
.stair_right ul li span{
  position: absolute;
  top: 4px;
  left: 2px;  
}
.stair_img{
  float: right;
  margin-top: 4px;
  margin-right: 10px;
}
.nav_t{
  height: 50px;
  margin-left: 200px;

}
.nav_t ul li{
  float: left;
  line-height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  position: relative;
  cursor: pointer;
}
.nav_t ul li span{
  position: absolute;
  top: 3px;
  left: 18px;

}

/* 模态框 */
.mtk {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.mtk_center {
  width: 600px;
  height: 330px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.mtk_top {
  width: 100%;
  height: 30px;
  background: #4664ad;
}
.mtk_top ul {
  padding: 10px;
  color: #e8ebed;
  display: flex;
  justify-content: space-between;
}
.mtk_top ul .close {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  color: #4664ad;
  text-align: center;
  line-height: 17px;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
}
.mtk_bottom_center {
  width: 500px;
  margin: auto;
}
.oldpw,
.newpw,
.qrnewpw {
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
}
.oldpw {
  margin-top: 40px;
}
.mtk_bottom {
  box-sizing: border-box;
  width: 100%;
  height: 300px;
  background: #fff;
  border: 10px solid #4664ad;
}
.mtk_bottom input {
  width: 400px;
  border: 1px solid #dfdad7;
}
.mtk_btn {
  display: flex;
  margin: 40px auto;
  justify-content: space-around;
}
.mtk_yes,
.mtk_no {
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
.mtk_yes {
  background-color: #46c540;
}
.mtk_no {
  background-color: #4664ad;
}

</style>
