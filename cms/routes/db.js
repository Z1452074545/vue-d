var mongClient = require("mongodb").MongoClient
var settings = require("./settings.js")
//根函数，数据初始函数
function ConnectDB(callback) {
    var url = settings.dburl
    mongClient.connect(url, function (err, db) {
        if (err) {
            callback(err, null)
            return
        }
        callback(err, db)
    })
}
//增 
exports.add = function (collectionName, json, callback) {
    ConnectDB(function (err, db) {
        db.collection(collectionName).insertOne(json, function (err, data) {
            callback(err, data)
            db.close()
        })
    })
}
//删除
exports.del = function (collectionName, json, callback) {
    ConnectDB(function (err, db) {
        db.collection(collectionName).remove(json, function (err, data) {
            callback(err, data)
            db.close()
        })
    })
}
//修改
exports.update = function (collectionName, json1, json2, callback) {
    ConnectDB(function (err, db) {
        db.collection(collectionName).updateMany(json1, json2, function (err, data) {
            callback(err, data)
            db.close()
        })
    })
}
//查
exports.find = function (collectionName, json, callback) {
    ConnectDB(function (err, db) {
        var data = db.collection(collectionName).find(json).toArray(function(err,data){
            if(err){
                return
            }
            callback(err, data)
            db.close()
        })
    })
}

