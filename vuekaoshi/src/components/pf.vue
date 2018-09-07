<template>
  <div>
      <div class="pf_box">
         <span v-for="item,index in kxx" @click="btn(index)">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      kxx:['☆','☆','☆','☆','☆',],
      sxx:'★'
      
    }
  },
  methods:{
    btn(index){
      if(index===0){
        this.kxx=['★','☆','☆','☆','☆'];
      }else if(index===1){
        this.kxx=['★','★','☆','☆','☆'];
      }else if(index===2){
        this.kxx=['★','★','★','☆','☆'];
      }else if(index===3){
        this.kxx=['★','★','★','★','☆'];
      }else if(index===4){
        this.kxx=['★','★','★','★','★'];
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
.pf_box{
  width: 400px;
  height: 140px;
  background: #ccc;
  margin: 50px auto;
}
.pf_box span{
  margin-left: 10px;
  cursor: pointer;
}

</style>
