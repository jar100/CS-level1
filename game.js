// var canvas = document.getElementById("game");
// var ctx = canvas.getContext('2d');

// //사각형 그리기
// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle = "#FF0000";
// ctx.fill();
// ctx.closePath();


// // 동그라미 그리기
// ctx.beginPath();
// ctx.arc(100,100,10,0,Math.PI * 2,false);
// ctx.fillStyle = '#00FF00';
// ctx.fill();
// ctx.closePath();

// var makeArc = function() {
//     var colorCode = "#" + Math.random().toString(16).slice(2,8);
//     var x = Math.random()*480;
//     var y = Math.random()*380;
//     var r = Math.random()*50;
//     ctx.beginPath();
//     ctx.arc(x,y,r,0,Math.PI * 2,false);
//     ctx.fillStyle = colorCode;
//     ctx.fill();
//     ctx.closePath();
//     console.log(colorCode);
// }
// var draw = setInterval(makeArc,500);

// var stop = function() {
//     clearInterval(draw);    
// }
// var start = function() {
//     draw = setInterval(makeArc,300);
// }

//ctx.clearRect(0,0,convas.width,convas.heigth);



var canvas = document.getElementById('game');
var ctx = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;



var bricks = [];

for ( var i = 0 ; i < 3 ; i++) {
    
}

var drawBrise = function() {
    //사각형 그리기
    ctx.beginPath();
    ctx.rect(20, 40, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}








//동그라미 그리기
var ball = {x: w/2, y: h - 30, r: 10, dx: 2, dy: -2};

ball.draw =function() { 
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fillStyle ="#FF0000";
    ctx.fill();
    ctx.closePath();
    this.check();
   // 위치 재계산
   this.x += this.dx;
   this.y += this.dy;

}

ball.check = function() {
    
    //충돌 체크
    if (this.x < 0 +  this.r || this.x > w - this.r ) {
        this.dx = -this.dx;
    }

    if (this.y < 0 + this.r || this.y > h - this.r ) {
        this.dy = -this.dy;
    }

}
var draw = function() {
    ctx.clearRect(0, 0, w,h);
    drawBrise();
    ball.draw();


 };
   
var id = setInterval(draw, 10);

