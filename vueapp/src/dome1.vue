<template>
  <div>
      <div class="box">
          <input type="text" @focus="xs()" v-model="val"> <input type="button" value="查询">
          <div class="box_cont1" v-show="shows">
              <p v-for="item,index in list" @click="dj(item,index)" :class="{active:index===cIndex}">{{item}}</p>
          </div>
      </div>
      <div class="box_up">
          <div class="box_left use">
              <p v-for="item,index in lists"><input type="checkbox"  @click="pitch(item,index)">{{item}}</p>

          </div>
          <div class="box_but">
              <input type="button" value="<" @click="butLeft()"><br>
              <input type="button" value=">" @click="butRight()">
          </div>
          <div class="box_right use">
              <p v-for="item,index in listss"><input type="checkbox"  @click="pitchs(item,index)">{{item}}</p>
          </div>

      </div>
  </div>
  
</template>
<script>
var list=[
    '111111111',
    '2222222',
    '33333333'
];
var lists=[
    'html',
    'css',
    'javascript',
    'nodeJS',
    'vue'
];
export default{
    name:"dome1",
    data(){
        return{
            title:'ssssss',
            shows:false,
            list:list,
            lists:lists,
            listss:[],
            val:'',
            cIndex:'',
            sIndex:'',
        }
    },
    methods:{
        xs(){
            // alert(1);
            this.shows=true;
        },
        dj(item,index){
            // alert(1)
            console.log(item);
            this.val=item;
            this.cIndex=index;
        },
        butLeft(){
            

        },
        butRight(){

        },
        pitch(item,index){
            this.sIndex=index;
            this.lists.splice(index, 1)
            this.listss.push(item);
        },
         pitchs(item,index){
            this.sIndex=index;
            this.listss.splice(index, 1)
            this.lists.push(item);
        }

    }
}
    
</script>
<style>
.box{
    width: 230px;
    height: 400px;
    margin: 50px auto;
    background: orchid;
}
.box_cont1{
    height: 370px;
    margin-top: 10px;
    background:#ccc;
}
.active{
    background: #fff;
}
.box_up{
    width: 1200px;
    height: 400px;
    background: #ccc;
    margin: 100px auto;
    position: relative;
}
.use{
    width: 500px;
    height: 400px;
    border: 2px solid #333;
}
.box_left{
    float: left;
}
.box_right{
    float: right;
}
.box_but{
    width: 25px;
    height: 50px;
    position: absolute;
    top: 160px;
    left: 580px;
}


</style>

