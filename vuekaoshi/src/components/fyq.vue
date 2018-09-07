<template>
  <div>
      <div class="fyq_box">
          <div class="fyq_cont">
              <div class="left">
                  共{{strip}}条/{{arr2}}页 
              </div>
              <div class="centert">
                   <span @click="left">&lt;</span>
                   <span>{{arr1}}</span>
                   <span>{{arr2}}</span>
                   <span>{{arr3}}</span>
                   <span @click="right">&gt;</span>
              </div>
              <div class="right">
                  前往<input type="text" @keydown="dome" v-model="msg">页
              </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            strip:50,
            // arr:[1,2,3,4,5,6,7,8,9,10],
            msg:'',
            arr1:1,
            arr2:2,
            arr3:3,
        }
    },
    methods:{
        dome(ev){
            if(ev.keyCode==13){
            if(this.msg>0 && this.msg<50){
                this.arr1=this.msg-1;
                this.arr2=this.msg;
                var s=parseInt(this.msg)+1;
                this.arr3=s;
            }else{
                alert("没有此页面")

                 }
            console.log(this.msg) 
               }
            },
        left(){
            if(this.arr1>0){
            this.arr1=this.arr1-1;
            this.arr2=parseInt(this.arr2)-1;
            this.arr3=this.arr3-1;
            }else{
                alert("前面没有啦")
            }
        },
        right(){
            if(this.arr3<50){
            this.arr1=this.arr1+1;
            this.arr2=parseInt(this.arr2)+1;
            this.arr3=this.arr3+1;
            }else{
                alert("后面没有啦")
            }
        }

    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.fyq_box{
    width: 800px;
    height: 100px;
    background: #ccc;
    margin: 100px auto;
    position: relative;
}
.fyq_cont{
    width: 800px;
    height: 40px;
    position: absolute;
    left: 0;
    bottom: -40px;
    background: pink;
}
.fyq_cont div{
    float: left;
}
.left{
    width: 150px;
    height: 40px;
}
.centert span{
    margin-left: 10px;
}
.right input{
    width: 50px;
}
</style>
