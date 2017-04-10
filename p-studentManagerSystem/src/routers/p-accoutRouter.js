"use strict"

//引包
const express=require("express");
const path=require("path");

//创建路由对象
const accountRouter=express.Router();
const accountCtrl=require(path.join(__dirname,"../controllers/p-accountController.js"));

//请求、处理、响应
//获取登录页面
accountRouter.get("/login",accountCtrl.getLoginPage);
//获取验证码图片
accountRouter.get("/vcode",accountCtrl.getVcodeImage);

module.exports=accountRouter;