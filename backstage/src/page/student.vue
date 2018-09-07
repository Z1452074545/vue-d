<template>
  <div>
      <user-nav></user-nav>
      <div class="user_box">
          <div class="user_path">
             首页/用户管理/学员管理
          </div>
          <div class="user_query">
              <input type="text" placeholder="用户名" v-model="searchText">
              <input type="text" placeholder="邮箱">
              <input type="text" placeholder="手机号">
              <div class="but_query" @click="stuFind">查询</div>
          </div>
          <div class="user_cont1">
              <div class="user_list">
                  <span>...</span>系统人员列表
              </div>
              <el-table
                    :data="tableData"
                    stripe
                    style="width: 100%">
                    <el-table-column
                    prop="username"
                    label="用户名"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="email"
                    label="邮箱"
                    width="180">
                    </el-table-column>
                    <el-table-column
                    prop="phone"
                    label="手机">
                    </el-table-column>
                    <el-table-column
                    prop="createAt"
                    label="注册日期">
                    </el-table-column>
                    <el-table-column
                    prop="normal"
                    label="状态">
                    </el-table-column>
                    <el-table-column
                    prop="tokenId"
                    label="操作">
                    <template slot-scope="scope">
                      <el-button type="text" size="small" @click="safetyB(scope)">冻结</el-button>
                      <!-- <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>  -->
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
            page:1,
            pageer:1,
        }
    },
    methods:{
        StudentshowList(){
            Axios({
                url:"/Handler/StudentshowList?action=Studentshow",
                method:'get',
                params:{
                    pageStart:this.pageer,
                    searchText:this.searchText,
                }
            }).then(res=>{
                console.log(res)
                this.tableData=res.data.data.list,
                this.page=res.data.data.count
            })
        },
        changePage(){
            this.pageer=arguments[0],
            console.log(arguments[0])
            this.StudentshowList() 
        },
        stuFind(){
            this.StudentshowList()
        }
    },
    mounted(){
        this.StudentshowList()
    }
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
    width: 180px;
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
</style>
