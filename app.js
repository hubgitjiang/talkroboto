const express = require('express')
// 创建服务应用
const app = express() 
// 设置统一静态资源文件
app.use(express.static('public'))

// 开启监听
app.listen(3000)