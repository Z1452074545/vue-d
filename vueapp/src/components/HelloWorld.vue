<template>
<div id="app">
    <!-- 双向数据绑定 -->
    <!-- <input type="text" v-model="ags">
    {{ags}} -->

    <!-- 循环 -->
    <!-- <div>
        <div v-for="(item,index) in json">姓名：{{item.name}}年龄：{{item.age}}性别：{{item.sex}}序号：{{index}}</div>
    </div> -->

    <!-- show -->
    <!-- <div>
        <div style="width:100px;height:100px;background:red;" v-show="hide"></div>
    </div>
    <button v-on:click="show">taggloe</button> -->

    <!-- if -->
    <!-- <div>
        <div v-if="hide"> 
            <div style="width:100px;height:100px;background:red;"></div>
        </div>
        <div v-else-if="!hide"> 
            <div style="width:100px;height:100px;background:hotpink;"></div>
        </div>
    </div>
    <button v-on:click="show">taggloe</button>  -->

    <!-- <div>
        <div style="width:100px;height:100px;border:1px solid #ccc" v-bind:class="hide?'red':'black'"></div>
        <div style="width:100px;height:100px;border:1px solid #ccc" v-bind:class="['red','black']"></div>
        <div style="width:100px;height:100px;border:1px solid #ccc" v-bind:class="{red:hide}"></div>   
    </div> -->

    <div>
        <img v-bind:src='src'>
        <!-- <img src="../../build/logo.png"> -->
    </div>


</div>
  
</template>
<script>
    export default{
        data(){
            return{
                ags:"hello vue",
                arr:['杰克','肉丝','汤姆'],
                json:[{"name":"xx","age":"18","sex":"man"},
                      {"name":"oo","age":"15","sex":"woman"},
                      {"name":"x0","age":"12","sex":"man"},
                ],
                hide:true,
                title:"hello vue!",
                src:require("../../build/logo.png"),
            }
        },
        methods:{
            show(){
                this.hide=!this.hide
            }
        },
        

    }
</script>
<style>
.red{
    background: red;
}
.black{
    background: black;
}
</style>



