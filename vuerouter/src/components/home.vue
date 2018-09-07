<template>
  <div>
      <!-- <router-link :to="{path:'first',params:{name:1},query:{id:0}}">first</router-link> -->
      <router-link :to="{path:'first'}">first</router-link>
      <router-link to="./new">new</router-link>
      <router-link to="./chard">char</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    console.log(arguments)
    next()
  },
  beforeRouterUpdate(to, from, next){},
  beforeRouterleave(to, from, next){}

}
</script>

<style>

</style>
