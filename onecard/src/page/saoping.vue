<template>
  <div>
      <div class="sp_title">
          <span class="but_back" @click="but_back">&lt;</span>
          套票购买
      </div>
      <div class="sp_maxImg" v-for="item,index in lists">
          <div v-show="id===index">
              <img :src=item.__ob__.value.maxImg />
              <div class="sp_cont">
                  <p>{{item.scenicTitle}}</p>
                  <p>
                      <span style="color:#ef9807;font-size:0.36rem;">￥{{item.__ob__.value.scenicTickets}}</span>
                      <span style="margin-left:0.2rem;font-size:0.36rem;color:#a5a5a5;"><del>￥{{item.__ob__.value.scenicOriginal}}</del></span>
                      </p>
                  <p style="font-size:0.28rem;">
                      <span style="color:#ef9807;">{{item.__ob__.value.scenicPastdue}}</span>
                      <span style="float:right; color:#333;">库存:{{item.__ob__.value.inventory}}</span>
                      </p>
              </div>
              <div class="sp_menu">
                  <div v-for="item,index in sp_title" :id="index===sIndex?'active':''" @click="but_tab(index)">{{item}}</div>
              </div>

              <div class="sp_details">
                  <h5>{{item.__ob__.value}}</h5>
              </div>
          </div><script></script>
          
           
      </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            lists:[],
            id: this.$route.query.goodId,
            loading: false,
            selectedGood: [],
            sp_title:["套票内容","购买须知","景区说明"],
            sIndex:0,
        }
    },
    methods:{
        getData(){
        this.loading = true;
        //拿到查询字段，商品的id后进行http请求
        var id = this.id;
          Axios({
              url:'/api/address',
              method:'get',
      }).then(res=>{
        this.lists=res.data.data.lists;
        console.log(res)
      })
      this.loading = false;
        } ,
        but_back(){
            this.$router.push('waiter')
        },
        but_tab(idnex){
            this.sIndex=idnex;
        }   
    },
    mounted(){
        this.getData();  
    },
}
</script>

<style>
.sp_title{
    width: 100%;
    height: 0.8rem;
    background: #008dee;
    text-align: center;
    line-height: 0.8rem;
    color: #fff;
    font-size: 0.36rem;
    position: relative;
}
.but_back{
    position: absolute;
    width: 0.5rem;
    height: 0.8rem;
    left: 0.1rem;    
}
.sp_cont{
    width: 100%;
    height: 2rem;
    background:#fff;
    font-size: 0.32rem;
    padding: 0.2rem;
    box-sizing: border-box;
    line-height: 0.5rem;
}
.sp_menu{
    width: 100%;
    height: 0.8rem;
    display: flex;
    background: #fff;
    margin-top: 0.05rem;
}
.sp_menu div{
    box-flex:1;
    width: 33.3%;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.32rem;
    color: #999;
}
#active{
    color: #4990e2;
}

</style>
