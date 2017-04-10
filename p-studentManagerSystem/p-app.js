"use strict"

//引包
const express=require("express");
const path=require("path");

//创建app
const app=express();

//处理静态资源
app.use(express.static(path.join(__dirname,"src/statics")));

//处理路由
const accountRouter=require(path.join(__dirname,"src/routers/p-accoutRouter.js"));
app.use("/account",accountRouter);

//开启web服务
app.listen(3000,"127.0.0.1",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("start ok");
})