"use strict"

var Koa = require("koa");
var path = require("path")
var util = require("./lib/util")
var wechat = require("./wechat/g")
var wechat_file = path.join(__dirname, './config/wechat.txt')
var config = {
    wechat: {
        appID : "wx83ab7dc18148dc9b",
        appSecret : "4594ac21d2c47e5721f61db9b6196c7e",
        token : "supernova",
        getAccessToken: function (){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken: function (data){
            var data = JSON.stringify(data);
            return util.writeFileAsync(wechat_file, data)
        }
    }
}

var app  = new Koa();

app.use(wechat(config.wechat));

app.listen(8989)
console.log('Listening:8989');
