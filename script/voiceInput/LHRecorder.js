
var $tips=$(".mirophoneChTips");
var height=$tips.height();

//传入音波

function recording(val) {
    var changeHeight = 4+ 1*val + "px";
    $(".mirophoneChTips").append(
        '<div class="record-volume-bar" style="height:' + changeHeight + '"></div>'
    );
    $(".mirophoneChTips div:lt(1)").remove();
}

//时间计时

var minute, second;
minute = second = 0;
var int;

//计时重置

function TimeReset() {
  window.clearInterval(int);
  minute = second = 0;
  $("#timetext").text("00:00");
}

//开始计时

function TimeStart() {
  int = setInterval(function() {
    second = second + 1;
    if (second >= 60) {
      second = 0;
      minute = minute + 1;
    }
    $("#timetext").text( Zero(minute) + ":" + Zero(second));
  }, 1000);
}
//时间补零
function Zero(num){
      if(num<10){
          return "0"+num
      }
      return num
}
