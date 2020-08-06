//1.引入express
const express = require('express')
const { request, response } = require('express')

//2.创建应用对象
const app = express()

//3.创建路由规则
//request 请求报文封装
//response 响应报文封装
app.get('/', (request, response) => {
    response.send("hello express")
})
//4.监听端口服务
app.listen(8000, () => {
    console.log("服务开启...8000端口监听中...");
})