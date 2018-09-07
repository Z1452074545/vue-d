<template>
<div>
    <!-- 普通事件 -->
    <!-- <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button>
    <button @click="click">click</button> -->

     <!-- 事件修饰符 -->
    <!-- <div @click="grodpa()" style="width:400px;height:400px;background:red;">
        <div @click="pernt()" style="width:200px;height:200px;background:pink;">
            <div @click.stop="child()" style="width:100px;height:100px;background:#ccc;">
        
            </div>
        </div>
    </div> -->
    <!-- <div>
        <button @contextmenu.prevent="prenevt">默认事件</button>
        <button @click.once="prenevt">show</button>
    </div> -->
    <!-- 按键修饰符 -->
    <div>
        <!-- <button @keydown.enter="enter">enter</button> -->
        <button @keydown.13="enter">enter</button>
        <button @keydown.space="enter">space</button>
    </div>
    
</div>
  
</template>
<script>
export default{
    name:"even",
    data(){
        return{

        }
    },
    methods:{
        click(){},
        mouseover(){},
        mouseout(){},
        mouseenter(){},
        mouseleave(){},
        mouseup(){},
        mousedown(){},
        mousemove(){},
        child(){
            alert(1)
            // 阻止事件冒泡
            // ev.stopPropagation()
            // retuer flass
            // ev.cancelBubble = true

        },
        pernt(){
            alert(2);

        },
        grodpa(){
            alert(3);
        },
        prenevt(){
            alert(4);
        },
        enter(ev){
            // if(ev.keyCode===13){}
            alert(1)
            console.log(ev.keyCode)

        }

    }
}
    
</script>
<style>

</style>

