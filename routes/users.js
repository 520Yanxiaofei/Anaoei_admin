var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
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

	var obj = {
		"success": false,
		"error_code": "d测试22233334dddddd4222"
	}
	console.log(obj);
	res.json(obj);
	// res.send('欢迎使用登录接口的');
});

module.exports = router;