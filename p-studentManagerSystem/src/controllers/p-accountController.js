//处理帐号相关的业务逻辑
"use strict"

//引包
const fs=require("fs");
const path=require("path");

//第三方验证码包
const captchapng=require("captchapng");

//获取登录页面
exports.getLoginPage=(req,res)=>{
    fs.readFile(path.join(__dirname,"../views/p-login.html"),(err,data)=>{
        if(err){
            console.log(err);
        }
        res.setHeader("Content-Type","text/html;charset=utf8");
        res.end(data);
    });
}

//获取验证码，返回图片
exports.getVcodeImage = (req,res)=>{
     /**
      * 1.生成随机数字图片(captchapng) https://www.npmjs.com/package/captchapng
      * 2.在服务器中记住上面生成的随机数字，方便后面登录时候使用
      * 3.返回
      */
      var vcode = parseInt(Math.random()*9000+1000);
      var p = new captchapng(80,30,vcode); // width,height,numeric captcha 
        p.color(0, 0, 0, 0);  // First color: background (red, green, blue, alpha) 
        p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha) 
 
        var img = p.getBase64();
        var imgbase64 = new Buffer(img,'base64');
        res.writeHead(200, {
            'Content-Type': 'image/png'
        });
        res.end(imgbase64);
}