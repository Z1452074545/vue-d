<template>
  <div>
      <button @click="run">动画</button>
      <transition name="fade" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
          <div v-show="show"  class="fade" style="width:100px;height:100px;background:#f00;"></div>
      </transition>
  </div>
</template>

<script>
// 1.直接在css中定义  2.通过应用其他动画库   3.动画钩子
  
export default {
    data(){
        return{
            show:false,

        }
    },
    methods:{
        run(){
            this.show=!this.show;
        },
        beforeEnter(el){
            el.style.marginLeft=300+'px';

        },
        enter(el){
            console.log(arguments);
            el.offsetLeft; //代表一个过程 没有具体实际意义
            el.style.marginLeft=0;
        },
        afterEnter(el){
            el.style.marginLeft=300+'px';
        }
    }
}
</script>

<style>
/* .fade-enter,.fade-leave-to{
    transform: translateX(300px);
    transform: rotateY(720deg);
    margin-left: 300px;
    transition: all 2s;
}
.fade-leave,.fade-enter-to{
    padding-left: 30px; 
    transform: scale(1.2);

} */
.fade{
    transition: all 3s;
}

</style>

