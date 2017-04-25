"use strict"

var Koa = require("koa");
var sha1 = require("sha1");
var config = {
    wechat: {
        appId : "wx83ab7dc18148dc9b",
        appSecret : "4594ac21d2c47e5721f61db9b6196c7e",
        token : "gh_2f6adca29cad"
    }
}

var app  = new Koa();

app.use(function *(next){
    console.log(this.query);

    var token = config.wechat.token;
    var signature = this.query.signature;
    var nonce = this.query.nonce;
    var timstamp = this.query.timestamp;
    var ecostr = this.query.ecostr;
    var str = [token, timstamp, nonce].sort().join('');
    var sha = sha1(str);

    if(sha === signature){
        this.body == ecostr + ''
    }else{
        this.body = 'wrong';
    }
})

app.listen(3100)
console.log('Listening:3100');
