var testDatas = {
	'9527': {
		name: '周星驰',
		age: '24',
		desc: '人没有梦想，和咸鱼有什么分别呢？'
	}
}
module.exports = function(app) {
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
};