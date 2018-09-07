<template>
    <div>
        <div>{{msg |uppercase}}</div>
        <div>{{a |cal(10,9)}}</div>

    </div>
  
</template>
<script>
export default{
    name:"filtar",
    data(){
        return{
            msg:"abc",
            a:1,
        }
    }
}
    
</script>
<style>

</style>

