<template>
  <div style="width:100%;height:100%">
    <Item fatherTitle="item"></Item>
    <!-- <div class="box_bg">
      <div class="box_week"></div>
       <div class="box_child">
         <ul>
           <li>A 错误答案</li>
           <li>B 正确答案</li>
           <li>C 错误答案</li>
           <li>D 错误答案</li>
         </ul>
       </div>
       <div class="box_start"></div>
      <div></div>
    </div> -->
  </div>
</template>

<script>
import "../../config/rem"
import Item from "../../components/item"
export default{
  name:"item",
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
  width: 6rem;
  height: 5rem;
  position: absolute;
  top: 2rem;
  left: 50%;
  margin-left: -3rem;
  background: url('../../assets/images/2-1.png');
  background-size: 6rem 5rem;

}
.box_start{
  position: absolute;
  width: 2rem;
  height: 1rem;
  top: 7.5rem;
  left: 50%;
  margin-left: -1rem;
  background: url('../../assets/images/2-2.png');
  background-size: cover;
}
.box_child{
  padding-top: 0.7rem;
  font-size: 0.36rem;
  text-align: center;
  box-sizing: border-box;
  
}
</style>
