//iphoneX适配
var iphoneXfit = function(){
	if (api.systemType == 'ios') {
        if (api.deviceModel == 'iPhone10,3') {
            $('.header').css('height', '70px').css("line-height","88px");
            $(".footer").css("margin-bottom","20px");
            $(".emergency-filter").css("top","2.2rem");//应急维保的过滤图标
            $(".rontine-filter").css("top","2.2rem");//例行维保的过滤图标
        }
    }
}
var isIphoneX = function(){
	var bool = false;
	if (api.systemType == 'ios') {
        if (api.deviceModel == 'iPhone10,3') {
            bool = true;
        }
    }
	return bool;
}
