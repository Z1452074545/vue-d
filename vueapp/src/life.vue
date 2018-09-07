<template>
    <div>
        <input type="text" v-model="ags">
        
    </div>
</template>
<script>
export default{
    name:"life",
    data(){
        return{
            ags:'sss',
            // agss:'sss',

    }
    },
    beforeCreate(){
        console.group("-----------实例创建之前------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);

    },
    created(){
        console.group("-----------实例创建完成------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
        
    },
    beforeMount(){
        console.group("-----------实例挂载之前------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    },
    mounted(){
        console.group("-----------实例已经挂载------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    },
    beforeUpdate(){
        console.group("-----------数据更新之前------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    },
    updated(){
        console.group("-----------数据已经更新------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    },
    beforeDestroy(){
        console.group("-----------实例销毁之前------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    },
    destroyed(){
        console.group("-----------实例已经销毁------------");
        console.log("%c%s","color:red","el :",this.$el);
        console.log("%c%s","color:red","data :",this.$data);
        console.log("%c%s","color:red","ags :",this.$ags);
    }  
}
    
</script>
<style>

</style>
