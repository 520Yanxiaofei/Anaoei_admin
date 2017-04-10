var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var app = express();
var Login = require('../mondb/login'); //导入模型数据模块

//中间件body-parser和multer用于处理和解析post请求的数据。
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

router.post('/', function(req, res) {
	// 接收 JSON 格式  
	var data = {
		'username': req.body.username,
		'password': req.body.password
	};
	Login.find(data, function(err, docs) {
		if (err) console.log(err);
		// res.json(docs)
		if (docs != '') {
			res.json({
				data: null,
				message: '登录成功!',
				code: '200'
			});
		} else {
			res.json({
				data: null,
				message: '账号或者密码错误!',
				code: '404'
			});
		};
	})
});


module.exports = router;