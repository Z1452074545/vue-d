// (function(doc,win){
//     var docEl=doc.documentElement,
//         resize='onorientationchange' in window?'onorientationchange':'resize'
//         // if(!clientwidth){
//         //     return
//         // }else{
//         //     docEl.style.fontSize=20*(clientwidth/320)+"px"
//         // }
//         var recal=function(){
//             var clientwidth=doc.clientwidth
//             if(!clientwidth) return
//             docEl.style.fontSize=20*(clientwidth/320)+"px"
//         }
//         if(!doc.addEventListener) return
//         win.addEventListener(resize,recal.false) 
//         // DOMConentLoaded 浏览器内部加载执行
//         doc.addEventListener('DOMConentLoaded',recal,false)
// })(document,window)

(function(doc,win){
    var docEl=doc.documentElement,
    resize='onorientationchange' in window?'orientationchange':'resize',
    oBody=document.querySelector('body');
   // console.log(oBody)
    
    var recal=function(){
      
      var clientWidth=docEl.clientWidth;
      
      if(!clientWidth) return;
      if(clientWidth>640){
       clientWidth=640;
       
      }else if(clientWidth<320){
       clientWidth=320
      }
      console.log(clientWidth)
      
      docEl.style.fontSize=clientWidth/6.4+"px";
    }
    recal();
    if(!doc.addEventListener) return;
   //  处理移动端打开的状态
    window.addEventListener(resize,recal,false);
   //  处理浏览器打开的状态
    doc.addEventListener('DOMContentLoaded',recal,false)
    
  })(document,window);

