var angle_='NWs';
$(".wheel-button").wheelmenu({
  trigger: "click",
  animation: "fly",
  animationSpeed:"fast"
});

var flag = false;
var cur = {
  x: 0,
  y: 0
}
var nx, ny, dx, dy, x, y;
function down() {
  flag = true;
  var touch;
  if (event.touches) {
    touch = event.touches[0];
  } else {
    touch = event;
  }
  cur.x = touch.clientX;
  cur.y = touch.clientY;
  dx = div2.offsetLeft;
  dy = div2.offsetTop;
}

function move() {
  if (flag) {
    var touch;
    if (event.touches) {
      touch = event.touches[0];
      if($("#wheel").css("display")=='block'){
          $("#div1").click()
      }
    } else {
      touch = event;
    }
    nx = touch.clientX - cur.x;
    ny = touch.clientY - cur.y;
    x = dx + nx;
    y = dy + ny;
    div2.style.left = x + "px";
    div2.style.top = y + "px";
    //阻止页面的滑动默认事件
    // document.addEventListener("touchmove", function() {
    //   event.preventDefault();
    // }, false);
  }
}
//鼠标释放时候的函数
function end() {
  var height=api.winHeight;
  var width=api.winWidth;
  if (x < width/2) {
    x = 10;
    angle_='NEs'
  }
  if (x >= width/2) {
    x = width-55;
    angle_='NWs'
  }
  if (y < 100) {
    y = 100;
  }

  if (y >= height-150) {
    y =height- 150;
  }
  div2.style.left = x + "px";
  div2.style.top = y + "px";
  flag = false;
}
var div2 = document.getElementById("div1");
div2.addEventListener("mousedown", function() {
  down();
}, false);
div2.addEventListener("touchstart", function() {
  down();
}, false)
div2.addEventListener("mousemove", function() {
  move();
}, false);
div2.addEventListener("touchmove", function() {
  move();
}, false)
document.body.addEventListener("mouseup", function() {
  end();
}, false);
div2.addEventListener("touchend", function() {
  end();
}, false);
