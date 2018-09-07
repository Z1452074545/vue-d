<template>
  <div>
      <div v-pic="item" style="width:200px;height:200px;border:1px solid #ccc" v-for="item in arr"></div>
  </div>
</template>
<script>
import Vue from "vue"
Vue.directive("pic",{
    // el.style.background="#f00";
    inserted(el,bg){
        var color=Math.floor(Math.random()*99999+100000);
        var img=new Image();
        console.log(img)
        img.src=bg.value;
        console.log(bg)
        el.style.background="#"+color;
        img.onload=function(){
        el.style.background='url('+ img.src +')'
        }
        console.log(arguments);

    }
})
export default{
    data(){
        return{
            arr:[
               'http://img3.imgtn.bdimg.com/it/u=531501792,1714592181&fm=200&gp=0.jpg',
               'http://img2.imgtn.bdimg.com/it/u=3320603451,3643904433&fm=27&gp=0.jpg',
               'http://img2.imgtn.bdimg.com/it/u=3320603451,3643904433&fm=27&gp=0.jpg',
            ]
        }
    }
} 
</script>
<style>

</style>

