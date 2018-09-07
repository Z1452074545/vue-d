<template>
  <div>
    <userNav></userNav>
    <div class="home_box">
      <!-- kec列表 -->
         <div class="home_cont1" v-for="item,index in homeData.list" @mouseover="over(index)" @mouseout="out(index)">
           <h3>{{item.title}}</h3>
           <p>{{item.title_e}}</p>
           <div class="cont1_hover"></div>
           <div class="cont1_hover1" v-show="index==sIndex">
             {{item.data}}
           </div>
          </div>
      <!-- 学习人数比例 -->
      <div class="home_cont2">
        <div class="cont2_1" id="chartOne"></div>
        <div class="cont2_2" id="chartTwo"></div>
      </div>





    </div>
  </div>
  
</template>

<script>
import userNav from '../page/usernav'
import echarts from 'echarts'
var homeData={
  list:[
    {
      title:"课程列表",
      title_e:"Course list",
      data:"查询现有课程,添加课程,管理课程"
    },
    {
      title:"课程添加",
      title_e:"Course list",
      data:"查询现有课程,添加课程,管理课程"
    },
    {
      title:"课程置顶",
      title_e:"Course list",
      data:"查询现有课程,添加课程,管理课程"
    },
    {
      title:"视频管理",
      title_e:"Video Manggest",
      data:"查询现有课程,添加课程,管理课程"
    },
    {
      title:"用户管理",
      title_e:"User Manggest",
      data:"查询现有课程,添加课程,管理课程"
    },
    {
      title:"学院管理",
      title_e:"Course Mangge ",
      data:"查询现有课程,添加课程,管理课程"
    },
  ],
     
}
export default {
  name:'home',
  components:{userNav},
  data(){
    return{
      homeData:homeData,
      hide:false,
      sIndex:null,
      chartOne:'',
    }
    
  },
  methods:{
    over(index){
      console.log(index);
      this.sIndex=index;
      // this.hide=true;
    },
    out(index){
      this.sIndex=null;
    },
    drawLine(){
      console.log(1);
        // 基于准备好的dom，初始化echarts实例
        let chartOne = this.$echarts.init(document.getElementById('chartOne'))
        let chartTwo = this.$echarts.init(document.getElementById('chartTwo'))
        
        // 绘制图表
        chartTwo.setOption({
           tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'right'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'line',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570]
        },

        {
            name:'搜索引擎细分',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [160,130],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            data:[
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
          
        })










        chartOne.setOption({
        title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
        });
    },   
  },
  mounted(){
    this.drawLine()
  }
}
</script>

<style>
html,body{
  background: linear-gradient(right bottom,#807ea3,#0c1c4f); 
}
.home_box{
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
 
}
.home_cont1{
  float: left;
  width: 160px;
  height: 200px;
  background: #39528a; 
  margin-left: 60px;
  margin-top: 100px;
  position: relative;
  cursor: pointer;
}
.home_cont1 h3{
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin-top: 30px;
}
.home_cont1 p{
  text-align: center;
  font-size: 12px;
  color: #fff;
}
.cont1_hover{
  width: 60px;
  height: 60px;
  background: olivedrab;
  position: absolute;
  top: 100px;
  left: 50px;
}
.cont1_hover1{
  padding: 0 8px;
  /* background: olivedrab; */
  position: absolute;
  top: 100px;
  left: 5px;
  color: #fff;
}
.home_cont2{
  width: 100%;
  height: 480px;
  background: #6c739f;
  margin-top: 450px;
  margin-left: 30px
}
.cont2_1{
  width: 400px;
  height: 360px;
  background: #fff;
  float: left;
  margin: 70px 80px;
}
.cont2_2{
  width: 530px;
  height: 360px;
  background: #fff;
  float: right;
  margin: 70px 100px;

}



</style>
