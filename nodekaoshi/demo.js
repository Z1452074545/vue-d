const express = require("express")
const path = require("path")
const app = express()
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const biu=require("./temple")

app.use(express.static(path.join(__dirname)))

app.get("/", function (req, res) {
    res.send("hello bye")
})

//注册
app.get("/add", function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    biu(req, res, "admin", {
        "username": username,
        "password": password
    }, function (result) {
        res.send({
            success: "ok",
            data: result
        })
    })
})
//登录+查看
app.get("/show", function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    biu(req, res, "admin", {
        "username": username,
        "password": password
    }, function (result) {
        res.send({
            success: "ok",
            data: result
        })
    })
})
app.listen(2080)