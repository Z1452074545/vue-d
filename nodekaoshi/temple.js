var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;

var Url = "mongodb://localhost:27017/mine";

var add = function (db, collections, sele, fn) {
    db.collection(collections).insert([sele], function (err, result) {
        if (err) {
            throw err;
        }
        fn(result)
    })
}

var show = function (db, collections, sele, fn) {
    db.collection(collections).find(sele).toArray(function (err, result) {
        if (err) {
            throw err;
        }
        fn(result)
    })
}

var change = function (db, collections, sele, fn) {
    db.collection(collections).update(sele[0], {
        $set: sele[1]
    }, function (err, result) {
        if (err) {
            throw err;
        }
        fn(result)
    })
}

var remove = function (db, collections, sele, fn) {
    db.collection(collections).deleteOne(sele, function (err, result) {
        if (err) {
            throw err;
        }
        fn(result)
    })
}

var model = {
    "/add": add,
    "/change": change,
    "/remove": remove,
    "/show": show,
}

module.exports = function (req, res, collections, sele, fn) {
    MongoClient.connect(Url, function (err, db) {
        if (err) {
            throw err;
        }
        model[req._parsedUrl.pathname](db, collections, sele, fn)
        db.close();
    })
}