<template>
  <div style="width:100%;height:100%">
     <!-- <Item fatherTitle="score"></Item> -->
    <div class="box_bg">
       <div class="box_child">{{score}}
       </div>
       <div class="box_start"><p style="font-size:0.6rem">{{viewTip}}</p></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default{
  data(){
    return{
      score:0,
      rightanswer:[2,7,12,13,18],
      tips:['菜鸡','叽叽','擦擦','可以','谁能赐你一错'],
      viewTip:''
    }

  },
  computed:mapState(['answer']),
  created(){
      this.getScore();
      this.getTips();  
    },
  methods:{
    getScore(){
      this.answer.forEach((item,index)=>{
        if(item===this.rightanswer[index]){
          this.score+=20
        }
      })
    },
    getTips(){
      switch(this.score){
        case 20: return this.viewTip=this.tips[0];
        break;
        case 40: return this.viewTip=this.tips[1];
        break;
        case 60: return this.viewTip=this.tips[2];
        break;
        case 80: return this.viewTip=this.tips[3];
        break;
        case 100: return this.viewTip=this.tips[4];
        break;
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
.box_bg{
  width: 100%;
  height: 100%;
  position: relative;
  background: url('../../assets/images/4-1.jpg');
}
.box_week{
  width: 1.3rem;
  height: 2.5rem;
  background: url('../../assets/images/WechatIMG2.png');
  background-size: cover;
  position: absolute;
  right: 0.7rem;
}
.box_child{
  width: 5rem;
  height: 4rem;
  position: absolute;
  top: 2rem;
  left: 50%;
  margin-left: -2.5rem;
  background: url('../../assets/images/4-2.png');
  background-size: 5rem 4rem;

}
.box_start{
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 7.5rem;
  left: 50%;
  margin-left: -1rem;
  background: url('../../assets/images/4-3.png');
  background-size: cover;
}
.box_child{
  padding-top: 0.7rem;
  font-size: 0.36rem;
  text-align: center;
  box-sizing: border-box;
  
}
</style>
