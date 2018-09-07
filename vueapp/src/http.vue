<template>
  <div>
      <button @click="get"> get</button>
      {{msg}}
      <!-- 
      vue-recouce  vue1 get post jsonp
      axios  插件
      fetch  浏览器
      promise  es6
       -->
  </div>
</template>

<script>

export default {
    name:"http",
    data(){
        return{
            msg:'',

        }
    },
    methods:{
        get(){
            // http.get("../src/1.txt",(ersult)=>{
            //     this.msg=result;

            // });
            // axios({
            //     url:"/api/dsapi",
            //     method:"get",
            //     params:{
            //         file:"json",
            //         date:""
            //     }
            // }).then(function(res){
            //     console.log(res);
            // })
               fetch("").then(function(){
                   
               })
            this.$http.get("../package.json").then(function(){})
        }
    }

}
</script>

<style>

</style>
