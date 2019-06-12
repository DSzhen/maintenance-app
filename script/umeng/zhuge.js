
  //GrowingIO //之前的埋点事件
//   function growingIoAddEvent(eventName){
//     //是否打开gio埋点
//     var openGio = false
// //  if(openGio) {
//       var gio = api.require("GrowingIO");
//       gio.track({
//             eventId: eventName
//         },function(ret, err){
//             //回调函数事件处理
//             console.log(JSON.stringify(ret)+eventName);
//         });
// //  }
//   }

    // GrowingIO
    function growingIoAddEvent(eventName,eventVarObj){
      if(openGio) {
      	var gio = api.require("GrowingIO");
      	if(api.systemType == "ios") {
				}else{
					gio.init(); 
				}
        if(eventVarObj){
          gio.track({
              eventId: eventName,//id名称
              eventLevelVariable:eventVarObj //事件级变量
          },function(ret, err){
              console.log(JSON.stringify(eventVarObj)+'_'+JSON.stringify(ret)+"v："+eventName);
          });
        }else{
          gio.track({
              eventId: eventName
          },function(ret, err){
              console.log(JSON.stringify(ret)+"v："+eventName);
          });
        }
      }
    }
