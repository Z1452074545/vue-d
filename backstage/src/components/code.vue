<template>
  <div>
      <canvas id="canvas" width="100%" height="40px" @click="changeVeri"></canvas>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    name:'codes',
    data(){
        return{
            canvas:'',
            width:'',
            height:'',
            ctx:'',
        }
    },
    methods:{
        randomNum(min,max){
            return Math.floor(Math.random()*(max-min)+min)
        },
        randomColor(min,max){
            var r=this.randomNum(min,max);
            var g=this.randomNum(min,max);
            var b=this.randomNum(min,max);
            return 'rgb('+r+','+g+','+b+')'
        },
        changeVeri(){
            Axios({
                method:'get',
                url:'/Handler/AdminLoginHandler?action=veri' 
            }).then(res=>{
                console.log(res.data.data)
                this.drawpic(res.data.data)
            })
        },
        drawpic(str){
                // 绘制矩形
            // this.ctx.strokeStyle=this.randomColor(0,255); 
            this.ctx.fillStyle=this.randomColor(180,240);
            // this.ctx.rect(0,0,100,40);
            this.ctx.fillRect(0,0,this.width,this.height)
            // 绘制线
            for(var i=0;i<10;i++){
            this.ctx.strokeStyle=this.randomColor(40,180);
            this.ctx.beginPath();
            this.ctx.moveTo(this.randomNum(0,this.width),this.randomNum(0,this.height));
            this.ctx.lineTo(this.randomNum(0,this.width),this.randomNum(0,this.height));
            this.ctx.lineWidth=1;
            this.ctx.closePath();
            this.ctx.stroke();
            }
            // 绘制点
            // ctx.beginPath();
            // ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),10,0,2*Math.PI);
            // ctx.stroke();
            for(var i=0;i<50;i++){
                this.ctx.fillStyle=this.randomColor(0,255);
                this.ctx.beginPath();
                this.ctx.arc(this.randomNum(0,this.width),this.randomNum(0,this.height),1,0,Math.PI*2,false);
                this.ctx.fill();
                this.ctx.closePath();
            }
            // 绘制文字
            // var str = 'ABCEFGHJKLMNPQRSTWXY123456789';
            for(var i=0; i<4; i++){
                // var txt = str[this.randomNum(0,str.length)];
                var txt=str[i];
                console.log(txt);
                this.ctx.beginPath();
                this.ctx.fillStyle = this.randomColor(50,120);  //随机生成字体颜色
                this.ctx.font = this.randomNum(15,40)+'px SimHei'; //随机生成字体大小
                var x = 10+i*25;
                var y = this.randomNum(25,45);
                var deg = this.randomNum(-45, 45);
                //修改坐标原点和旋转角度
                this.ctx.translate(x,y);
                this.ctx.rotate(deg*Math.PI/180);
                this.ctx.fillText(txt, 0,0);
                //恢复坐标原点和旋转角度
                this.ctx.rotate(-deg*Math.PI/180);
                this.ctx.translate(-x,-y);
                this.ctx.fill();
                this.ctx.closePath();
            }
        }
    },
    mounted(){
        this.canvas=document.getElementById('canvas');
        this.width=this.canvas.width;
        this.height=this.canvas.height;
        this.ctx=this.canvas.getContext('2d');
        console.log(this.randomColor(0,255));  
        this.changeVeri()
    }
}
</script>

<style>
canvas{
    /* font-size: 14px; */
    line-height: 20px
}
</style>
