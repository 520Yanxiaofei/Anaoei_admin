var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var debug = require('debug')('my-application'); // debug模块
app.set('port', process.env.PORT || 3000); // 设定监听端口

// Environment sets...

// module.exports = app; 这是 4.x 默认的配置，分离了 app 模块,将它注释即可，上线时可以重新改回来

//启动监听ddd
var server = app.listen(app.get('port'), function() {
	debug('Express server listening on port ' + server.address().port);
});

// var MongoClient = require('mongodb').MongoClient;
// var DB_CONN_STR = 'mongodb://127.0.0.1:27017/user';

// var insertData = function(db, callback) {
// 	//连接列表
// 	var collection = db.collection('user');
// 	//插入数据
// 	var data = [{
// 		"name": "yanxiaofei001"
// 	}, {
// 		"name": "feiyue001"
// 	}];
// 	collection.insert(data, function(err, result) {
// 		if (err) {
// 			console.log('error 插入失败：' + err);
// 			return;
// 		}
// 		callback(result)
// 	})
// }

// var selectData = function(db, callback) {
// 	//连接到表
// 	var collection = db.collection('user');
// 	//查询数据
// 	var whereStr = {
// 		'name': 'yanxiaofei001'
// 	};
// 	collection.find(whereStr).toArray(function(err, result) {
// 		if (err) {
// 			console.log('error 查询失败：' + err);
// 			return;
// 		}
// 		callback(result)
// 	})
// }
// MongoClient.connect(DB_CONN_STR, function(err, db) {
// 	console.log('连接成功！');
// 	// insertData(db, function(result) {
// 	// 	console.log(result);
// 	// 	db.close();
// 	// })
// 	selectData(db, function(result) {
// 		console.log(result);
// 		db.close();
// 	})
// })


var mongoose = require('mongoose');
var DB_URL = 'mongodb://127.0.0.1:27017/user';
/*** 连接*/
mongoose.connect(DB_URL);
/*** 连接成功*/
mongoose.connection.on('connected', function() {
	console.log('Mongoose 连接成功 ' + DB_URL);

});
/*** 连接异常*/
mongoose.connection.on('error', function(err) {
	console.log('Mongoose连接异常: ' + err);

});
/*** 连接断开*/
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose 连接断开');

});

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;