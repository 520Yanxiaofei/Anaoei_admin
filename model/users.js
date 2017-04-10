var mongoose = require('mongoose')
var UsersSchema = require('../mondb/users') //拿到导出的数据集模块
var Users = mongoose.model('Users', UsersSchema, 'user') // 编译生成Movie 模型
module.exports = Users