<template>
    <div>

        <div class="box_tab">
            <ul>
                <!-- <li  v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)">{{item}}</li> -->
                <li v-for="item,index in tabData" :class="{active:index===cIndex}" @click="tab(index)">{{item.title}}</li>
                
            </ul>
            <div class="box_box">
            <!-- <div  v-for='(itemCon,index) in tabContents'  v-show=" index == cIndex">{{itemCon}}</div> -->
            <div v-for="item,index in tabData" >
                <!-- <div :style="{display:index===cIndex?'block':'none'}" v-for="pos in item.cont">{{pos}}</div> -->
                <div v-show="index===cIndex" v-for="pos in item.cont">{{pos}}</div>
            </div>
        </div>
        </div>

        <div class="box_tab">
            <div class="add">
                <input type="text" v-model="cont"> <input type="button" value="添加" @click="add()">
            </div>
            <div class="adds">
                <ul>
                    <input type="text" v-model="val" style="width:60px">修改内容
                    <li v-for="item,index in cont1">{{item}}<span><button v-on:click="remove(index)">删除</button><button v-on:click="updata(index)">编辑</button></span></li>
                </ul>
            </div>

        </div>
        

    </div>
  
</template>
<script>
var tabData=[
    {
        title:"web",
        cont:["css","html","js"]
    },
    {
        title:"后端",
        cont:["java","html","js"]
    },
    {
        title:"全栈",
        cont:["php","nodejs","js"]
    }
]
export default{
    name:"tab",
    data(){
        return{
            tabs: ["标签一", "标签二","标签三"],
            tabContents: ["1111111111", "222222222222","333333333333333"],
            num: 1,
            cont:"",
            cont1:[],
            val:"",
            tabData:tabData,
            cIndex:0,
        }
    },
    methods:{
        tab(index) {
            this.cIndex = index;
        }, 
        add(){
            console.log(this.cont)
            this.cont1.push(this.cont)
            console.log(this.cont1)
        },
        remove(index){
            this.cont1.splice(index,1);
        },
         updata(index){
            // this.$set(this.cont1,this.index,'Xsssssss')
            // this.cont1[index]="aaaaaaaa";
            // console.log(this.index);
            // console.log(this.val);
            this.cont1.splice(index, 1, this.val);
        }
    },
}
    
</script>
<style>
 *{
     margin: 0;
     padding: 0;
 }
 html,body{
     background: #e1e8ee;
 }
 li{
     list-style: none;
 }
 .box_tab{
     width: 300px;
     height: 200px;
     margin: 50px auto;
     border: 1px solid #e1e8ee;
 }

.box_tab ul li{
    float: left;
    padding: 5px 5px;
    background: #f8f8fa;
    margin-left: 5px;
    cursor: pointer;
}
.box_box div{
    width: 300px;
    height: 150px;
    background: pink;
    text-align: center;

}
.box_box{
    margin-top: 30px;
}
.adds span{
    float: right;
}
.active{
    color:red;
}

</style>

