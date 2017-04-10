var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var Users = require('../mondb/users'); //导入模型数据模块

//设置跨域访问
// app.all('*', function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// 	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
// 	res.header("X-Powered-By", ' 3.2.1')
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });
/* GET users listing. */

router.get('/', function(req, res, next) {
	Users.fetch(function(err, users) {
		if (err) {
			console.log(err)
		}
		res.json({
			data: users,
			status: 200,
			message: '查询成功'
		});
	})
});

module.exports = router;