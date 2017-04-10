var mongoose = require('mongoose')
var UsersSchema = require('../mondb/login') //拿到导出的数据集模块
var Login = mongoose.model('Login', UsersSchema, 'user') // 编译生成Movie 模型
module.exports = Login