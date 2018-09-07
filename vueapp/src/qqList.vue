<template>
  <div>
      <div class="qq_box">
          <div class="title">{{header}}</div>
          <ul>
              <li v-for="item,index in list" @click="but(index)">{{item.add}}{{item.title}}<span>{{item.math}}</span><div  v-show="item.hide"><dl><dd v-for="item in item.cont">{{item}}</dd></dl></div></li>
          </ul>

      </div>
  </div>
</template>

<script>
        var list=[
                {
                    title:"好友",
                    cont:['tom','rous','jest','tom','rous','jest'],
                    math:"99/299",
                    hide:false,
                    add:"+",
                    
                },
                {
                    title:"陌生人",
                    cont:['xx','oo','xo','xx','oo','xo'],
                    math:"20/66",
                    hide:false,
                    add:"+",
                    
                },
                {
                    title:"同事",
                    cont:['甲','乙','丙','甲','乙','丙'],
                    math:"28/30",
                    hide:false,
                    add:"+",
                    
                }
            ]
export default {
    name:"qqList",
    data(){
        return{
            list:list,
            header:"好友列表",
            
            // setIndex:'',
        }
    },
    methods:{
        but(index){
            // this.setIndex=index;
            console.log(index)
            this.list[index].hide=!this.list[index].hide;
            // this.list[index].add=!this.list[index].j;
           
            
        }
        
    }

}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}
li{
    list-style: none;
}
.qq_box{
    width: 300px;
    height: 600px;
    background: #ccc;
    margin: 50px auto;
}
.title{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 24px;    
}
.qq_box ul li{
    cursor: pointer;
}
.qq_box ul li span{
    float: right;
}
.qq_box ul li div{
    
}

</style>
