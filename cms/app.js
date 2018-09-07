//启动文件
//加载express框架
var express=require("express");
//地址栏陆径
var path=require("path");
//错误处理日志
var morgan=require("morgan")
//处理cookie
var cookieParser=require("cookie-parser")
//属于cookie中的一个模块
var flash=require("connect-flash");
//session处理
var session=require("express-session");
//处理post请求
var bodyParser=require("body-parser")
//配置接口文件
var index=require("./routes/index.js")
//配置路由文件
var handler=require("./routes/db.js")
var app=express()
//使用之前的中间件
app.use(session({
    secret:"fcht",
    name:"fcht",
    "cookie":{maxAge:900000},
    resave:false,
    saveUninitialized:true
}))
app.use(morgan("dev"))
app.use(cookieParser())
app.use(flash())
//处理post请求
//处理json数据
app.use(bodyParser.json())
//处理静态资源
app.use(express.static(path.join(__dirname,"static")))
//处理字符串
app.use(bodyParser.urlencoded({extended:true}))
app.use("/Handler",index)
//解决跨域处理
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1')
    next();
});
module.exports=app

