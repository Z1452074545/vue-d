<template>
  <div style="width:100%;height:100%">
    <Item fatherTitle="home"></Item>
    <!-- <div class="box_bg">
      <div class="box_week"></div>
       <div class="box_child"><img src="../../assets/images/1-2.png"></div>
       <div class="box_start"></div>
      <div></div>
    </div> -->
  </div>
</template>

<script>
import Item from "../../components/item"
export default{
  name:"home",
  components:{Item}

}

</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.box_bg{
  width: 100%;
  height: 100%;
  position: relative;
  /* left: 50%;
  margin-left: -3.5rem; */
  background: url('../../assets/images/1-1.jpg');
}
.box_week{
  width: 1.3rem;
  height: 2.5rem;
  background: url('../../assets/images/WechatIMG2.png');
  background-size: cover;
  position: absolute;
  right: 0.7rem;
}
.box_child{
  position: absolute;
  top: 2rem;
  left: 50%;
  margin-left: -3rem;
  /* width: 0.1rem;
  height: 0.1rem; */
}
.box_child img{
  width: 6rem;
  height: auto;
}
.box_start{
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 7.5rem;
  left: 50%;
  margin-left: -1rem;
  background: url('../../assets/images/1-4.png');
  background-size: cover;
}

</style>
