<template>
  <div>
      <user-nav></user-nav>
      <div class="user_box">
          <div class="user_path">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item >首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
          <div class="user_query">
              <input type="text" v-model="searchText">
              <div class="but_query" @click="search">查询</div>
              <div class="but_add" @click="safety">+添加</div>
          </div>
          <div class="user_cont1">
              <div class="user_list">
                  <span>...</span>系统人员管理
              </div>
                <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="userName"
                    label="用户名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="trueName"
                    label="姓名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="power"
                    label="后台权限">
                    </el-table-column>
                    <el-table-column
                    prop="phone"
                    label="手机">
                    </el-table-column>
                    <el-table-column
                    prop="updateAt"
                    label="编辑日期">
                    </el-table-column>
                    <el-table-column
                    prop="tokenId"
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" size="small" @click="safetyB(scope)">编辑</el-button>
                      <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
          </div>
          <el-pagination
                background
                @current-change="changePage"
                :page-size=3
                layout="prev, pager, next"
                :total="page">
          </el-pagination>
      </div>


       <div class="bianji">
           <div v-show="mtkB" class="mtk">
      <div class="mtk_center">
      <div class="mtk_top">
        <ul>
          <li>编辑</li>
          <li class="gb" @click="closeB">×</li>
        </ul>
      </div>
      <div class="mtk_bottom">
        <div class="mtk_bottom_center">
          <div class="oldpw">
          <label for="oldPassword" >*用户名：</label>
          <input id="oldPassword" disabled="true" type="text" ref="bj1" v-model="userName">
        </div>
        <div class="newpw">
          <label for="newPassword">　*姓名：</label>
          <input id="newPassword" type="text" ref="bj2">
        </div>
        <div class="qrnewpw">
          <label for="qrnewPassword">*手机：</label>
          <input id="qrnewPassword" type="text" ref="bj3">
        </div>
        <div class="mtk_btn">
          <div class="mtk_yes" @click="updateB">确定</div>
          <div  class="mtk_no" @click="cancelB">取消</div>
        </div>
        </div>
      </div>
      </div>
    </div>
      </div>



      
      <!-- 模态框 -->
      <div v-show="mtk" class="mtk">
      <div class="mtk_center">
      <div class="mtk_top">
        <ul>
          <li>添加用户</li>
          <li class="close"  @click="close">×</li>
        </ul>
      </div>
      <div class="mtk_bottom">
        <div class="mtk_bottom_center">
          <div class="oldpw">
          <label for="userName" >*用户名：</label>
          <input id="userName" type="text" ref="userName">
        </div>
        <div class="newpw">
          <label for="trueName">　*姓名：</label>
          <input id="trueName" type="text" ref="trueName">
        </div>
        <div class="qrnewpw">
          <label for="phone">*手机号：</label>
          <input id="phone" type="text" ref="phone">
        </div>
        <div></div>
        *权限选择：
        <select name="power">
           <option>系统管理员</option>
           <option>课程管理员</option>
       </select>

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
import Axios from 'axios'
import userNav from '../page/usernav'
export default {
    name:"user",
    components:{userNav},
    data(){
        return{
              tableData:[],
              searchText:'',
              mtk:false,
              mtkB:false,
              page:1,
              pageer:1,
              userName:""
        }
    },
    methods:{
        search(){
            this.AdminshowList() 
        },
        del(row){
            Axios({
                url:"/Handler/AdminshowList?action=delete",
                method:'get',
                params:{
                    tokenId:row.tokenId
                }
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success)

                }
                this.AdminshowList()
                
            })

        },        
        AdminshowList(){
            Axios({
                url:"/Handler/AdminshowList?action=show",
                method:'get',
                params:{
                    pageStart:this.pageer,
                    searchText:this.searchText,
                
                }
            }).then(res=>{
                this.tableData=res.data.data.list,
                this.page=res.data.data.count
            })
        },
        close(){
            this.mtk=false;
        },
        cancel(){
            this.mtk=false;
        },
        safety(){
            this.mtk=true;
        },
        safetyB(){
            this.mtkB=true;
            console.log(arguments[0].row.userName)
            this.userName=arguments[0].row.userName
        },
        cancelB(){
            this.mtkB=false;
        },
        closeB(){
            this.mtkB=false;
        },
        updatepass(){
                Axios({
                url:"/Handler/AdminRegHandler?action=add",
                method:'post',
                data:{
                    userName:this.$refs.userName.value,
                    truename:this.$refs.trueName.value,
                    phone:this.$refs.phone.value,
                }
            }).then(res=>{
                if(res.data.success){
                    alert(res.data.success);
                    this.mtk=false;
                    this.AdminshowList()
                }
            })
        },
        updateB(){
            Axios({
                url:"/Handler/AdminRegHandler?action=update",
                method:'post',
                data:{
                    username:this.userName,
                    // phone:this.$refs.bj3.value,
                    truename:this.$refs.bj2.value
                }
            }).then(res=>{
                    alert("修改成功")
                    this.mtkB=false
                    this.AdminshowList()
               

            })
        },
        changePage(){
            this.pageer=arguments[0],
            console.log(arguments[0])
            this.AdminshowList() 
        }
    },
    mounted(){
        this.AdminshowList();
    },
}
</script>

<style>
html,boxy{
    background: #f7f5f5;
}
.user_box{
    padding: 0 10px;
}
.user_path{
    width: 100%;
    height: 50px; 
    line-height: 50px;
}
.user_query{
    width: 100%;
    height: 55px;
    border: 1px solid #d1cfc9;
    box-sizing: border-box;
    background: #fff;
    position: relative;
}
.user_query input{
    outline: 0 none;
    border: none;
    border: 1px solid #d1cfc9;
    width: 560px;
    height: 30px;
    margin-top: 10px;
    margin-left: 10px;
}
.but_query{
    width: 115px;
    height: 35px;
    background: #1fbb5c;
    text-align: center;
    line-height: 35px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    left: 595px;
    top: 9px;
}
.but_add{
    width: 115px;
    height: 35px;
    background: #4664ad;
    text-align: center;
    line-height: 35px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 9px;
}
.user_cont1{
    width: 100%;
    height: 360px;
    border: 1px solid #d1cfc9;
    box-sizing: border-box;
    margin-top: 15px;
    position: relative;
}
.user_list{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d1cfc9;
    line-height: 50px;
}
.user_list span{
    width: 40px;
    height: 50px;
    border-right: 1px solid #d1cfc9;
    margin-right: 30px;
}
.user_title{
    width: 100%;
    height: 50px;
    border: 1px solid #d1cfc9;
    box-sizing: border-box;
    background: #f1efed;
}
.user_title ul li{
    float: left;
    line-height: 50px;
}
.user_li1{
    width: 240px;
    height: 50px;
    border-right: 1px solid #d1cfc9;
    padding-left: 20px;
    box-sizing: border-box;
}
.user_li2{
    width: 636px;
    height: 50px;
    border-right: 1px solid #d1cfc9;
    padding-left: 20px;
    box-sizing: border-box;
}
.user_li3{
    width: 300px;
    height: 50px;
    border-right: 1px solid #d1cfc9;
    padding-left: 20px;
    box-sizing: border-box;
}
.user_lists ul li dl dd{
    float: left;
    border-bottom: 1px solid #d1cfc9;
    line-height: 50px
}
.user_lists ul li dl dd span{
    cursor: pointer;
    color: blue;
}
.user_paging{
    width: 100%;
    height: 50px;
    border: 1px solid #d1cfc9;
    position: absolute;
    bottom: 0;
    line-height: 50px;
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
