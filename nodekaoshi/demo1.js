const http=require('http');
const fs=require('fs');

var Server=http.createServer(function(req,res){
    console.log(req.url)
    var file_name="./"+req.url;
    console.log(req.url)
    fs.readFile(file_name,'utf-8',function(err,data){
        
        if(err){
            res.write("404");
        }else{
            res.write(data);
        }
        res.end();
    })

})

Server.listen(3000,function(){
    console.log("服务器启动...");
})