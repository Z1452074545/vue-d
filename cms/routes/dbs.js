var mongClient=require("mongodb").mongClient
var settings=require("./settings.js")
function ConnectDB(callback){
    var url=settings.dburl;
    mongClient.Connect(url,function(err,db){
        if(err){
            callback(err,null)
            return
        }
        callback(err,db)
    })
}
// 增
exports.add=function(collectionName,json,callback){
    ConnectDB(function(err,db){
        db.collection(collectionName).insertOne(json,function(err,data){
            callback(err,data);
            db,close();
        })
    })
} 
// 删
exports.del=function(collectionName,json,callback){
    ConnectDB(function(err,db){
         db.collection(collectionName).remove(json,function(err,data){
             callback(err,data);
             db.colse();
         })
    })
}
// 改
exports.updata=function(collectionName,json1,json2,callback){
    ConnectDB(function(err,db){
        db.collection(collectionName).updataMany(json1,json2,function(err,data){
            callback(err,data);
            db.colse();
        })
    })
}
// 查
exports.find=function(collectionName,json,callback){
    ConnectDB(function(err,db){
        db.collection(collectionName).find(json).toArray(function(err,data){
            if(err){
                return
            }
            callback(err,data);
            db.close();
        })
    })
}