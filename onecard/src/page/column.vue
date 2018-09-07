<template>
  <div>
      <headss faterTitle="column"></headss>
      <!-- cont -->
      <div class="column_box" v-for="item,index in column">
        <div class="column_left">
          <img :src="item.columnImg">
        </div>
        <div class="column_center">{{item.columnTitle}}</div>
        <div class="column_right">&gt;</div>
      </div>
      
      <tabbar></tabbar>
      
  </div>
  
</template>

<script>
var column={
  columnList:[
    {
      columnImg:'../../static/img/columncolor1.png',
      columnTitle:'公园套票',
    },{
      columnImg:'../../static/img/columncolor2.png',
      columnTitle:'优惠券',
    },{
      columnImg:'../../static/img/columncolor3.png',
      columnTitle:'快充券',
    }
  ]
}
import tabbar from '../page/footer'
import headss from '../page/header'
export default {
  name:"column",
  components:{tabbar,headss},
  data(){
    return{
      column:column.columnList,
    }
  }
  
}
</script>

<style>
html,body{
  background: #F3f3f3;
}
.column_box{
  width: 95%;
  height: 1.6rem;
  background: #fff;
  margin: 0.3rem auto ;
  position: relative;
}
.column_box div{
  float: left;
}
.column_left{
  margin-top: 0.2rem;
  margin-left: 0.2rem;

}
.column_left img{
  width: 0.8rem;
  height: 0.8rem;
}
.column_center{
  font-size: 0.38rem;
  margin-top: 0.5rem;
  margin-left: 0.2rem;
  color: #383838;
} 
.column_right{
  position: absolute;
  top: 0.3rem;
  right: 0.1rem;
  width: 1rem;
  height: 1rem;
  font-size: 0.30rem;
  text-align: center;
  line-height: 1rem;
  color: #9a9a9a;
}
</style>
