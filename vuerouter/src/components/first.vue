<template>
  <div>
    <Home></Home>
      首页
      <router-link to="/first/sy1">首页一号</router-link>
      <router-view ></router-view>
  </div>
</template>

<script>
import Home from "./home"
export default {
  components:{Home}

}
</script>

<style>

</style>
