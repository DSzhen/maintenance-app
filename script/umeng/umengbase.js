//统计事件  一般是点击事件
//（1）自定义事件id
//自定义事件的参数
//自定义事件的参数值
function addEvent(eventid, labelkey, labelvalue) {
	//统计登陆事件
	var umeng = api.require('umengTJ');
	umeng.onEvent({
		eventid : eventid, //自定义事件ID
		labelkey : labelkey, //自定义事件的参数
		labelvalue : labelvalue //自定义事件的参数值
	}, function(ret, err) {
		if (ret.status) {
			//alert(JSON.stringify(ret));
		} else {
			//alert(JSON.stringify(err));
		}
	})
}

