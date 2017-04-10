var mongoose = require('mongoose');

//申明一个mongoons对象
var UsersSchema = new mongoose.Schema({
	username: String,
	id: Number,
	password: String,

})

//查询的静态方法
// UsersSchema.statics = {
// 	fetch: function(user, cb) { //查询所有数据
// 		console.log(user)
// 		return this
// 			.find(user)
// 			// .sort('meta.updateAt') //排序
// 			.exec(cb) //回调
// 	},
// }
var Login = mongoose.model('Login', UsersSchema, 'user') // 编译生成Movie 模型
module.exports = Login
	//暴露出去的方法