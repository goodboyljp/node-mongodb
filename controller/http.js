var testDatas = {
	'9527': {
		name: '周星驰',
		age: '24',
		desc: '人没有梦想，和咸鱼有什么分别呢？'
	},
	'0001':{
		familyname: 'zhangsan',
		age: '24',
		desc: 'askdfjas;lhflajs;ld'
	},
	"yinguit":{
		name: "银谷科技",
		code: "1601",
		desc: "银谷HTML5，1601班，前程似锦！！！"
	}
}
var imgObj = [
	{
		imgUrl: 'http://10.48.0.41:3000/static/app/images/1.jpg',
		alt: '第一张图片'
	},
	{
		imgUrl: 'http://10.48.0.41:3000/static/app/images/2.jpg',
		alt: '第二张图片'
	},
	{
		imgUrl: 'http://10.48.0.41:3000/static/app/images/3.jpg',
		alt: '第三张图片'
	},
	{
		imgUrl: 'http://10.48.0.41:3000/static/app/images/4.jpg',
		alt: '第四张图片'
	}];
module.exports = function(app) {
	app.get('/User/getUserInfoByGet', function(req, res) {
		console.log( req.query );
		var _id = req.query.id;
		var _name = req.query.name;
		if( _id == "1601" && _name == "yinguit" ){
			res.send( {
				resultCode: "000000",
				result: testDatas["yinguit"]
			} );
		}else{
			res.send({
				param: _id + "&" + _name,
				resultCode: "123456",
				resultMsg: "没有匹配到数据，请检查参数"
			});
		}
	});
	app.post('/User/getUserInfo', function(req, res) {
		var _id = req.body.id;
		_data = testDatas[_id];
		if (_data) {
			res.send( {
				resultCode: "000000",
				result: _data
			} );
		} else {
			res.send({
				param: _id,
				resultCode: "123456",
				resultMsg: "-----nodejs response info : data errors-----"
			});
		}
	});

	app.get('/User/getImgSlide',function (req, res){
		var _id = req.query.id;
		var _name = req.query.name;
		if( _id == "1601" && _name == "yinguit" ){
			res.send({
				resultCode: "000000",
				result: imgObj
			});
		}else{
			res.send({
				resultCode: "123456",
				errMsg: "参数错误"
			});
		}
	});

	app.post('/User/getImgSlide',function (req, res){
		var _id = req.body.id;
		var _name = req.body.name;
		if( _id == "1601" && _name == "yinguit" ){
			res.send({
				resultCode: "000000",
				result: imgObj
			});
		}else{
			res.send({
				resultCode: "123456",
				errMsg: "参数错误"
			});
		}
	});
};