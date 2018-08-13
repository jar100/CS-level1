
var numbox = {w:75, h:100,arrays:[]};
// w 세로 h 가로
var canvas = document.getElementById('puzzle');
var ctx = canvas.getContext('2d');     

var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;

//document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
var screen = document.getElementById('screen');



// 배열 정렬하고 만드는 함수들 좀더 줄일 수 있을거 같다.
numbox.makeArrays = function() {    
    for (var i = 0; i < 16; i++) {
        numbox.arrays.push(i);
    }
}

numbox.makeList = function() {
    this.numArr = new Array(4);
    for ( var i =0; i< 4; i ++) {
        this.numArr[i] = this.arrays.splice(0,4);
    }
}

// 랜덤정렬
numbox.shuffle = function(arrays) {
    for ( var i =arrays.length-1; i>0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrays[i];
        arrays[i] = arrays[j];
        arrays[j] = temp;
    }
   


}



//상자 그리기
numbox.drawbox = function() {
    if (canvas.getContext) {
        ctx.fillStyle ="#0095DD";
        for(var i = 0 ; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                ctx.fillRect(70+(i*this.h), 40+(j*this.w),75,50);
                // 좌표값 , 크기
            }
        }
    }
}

//숫자 그리기
numbox.drawnum = function() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "30px malgun gothic"; //폰트의 크기, 글꼴체 지정 
        ctx.textAlign = "center";     
        ctx.fillStyle ="#FFFF00";
        for(var i = 0 ; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if( this.numArr[i] [j] !== 0 ){
                    ctx.fillText(this.numArr[i][j],105+(j*this.h), 75+(i*this.w));
                }
            }
        }
    }
}

// 빈공간인 0 찾기
numbox.find = function() {
    for ( var i = 0 ; i < 4; i++) {
        var find = this.numArr[i].indexOf(0); 
        if(find ===-1) {
        } else {
            this.zero = i+" "+this.numArr[i].indexOf(0);
        }
    }
}


numbox.numpush = function() {
    this.numshift =this.numArr[0].shift();
    this.numArr[0].push(this.numshift);
}

////////////////////////버튼
// 오른쪽
numbox.right = function() {
    this.find();
    if (this.zero[2] === "3" ) {
        
    } else {
        var temp = this.numArr[Number(this.zero[0])] [Number(this.zero[2]) +1];
        this.numArr[Number(this.zero[0])] [Number(this.zero[2]) + 1] = this.numArr[this.zero[0]][Number(this.zero[2])];
        this.numArr[this.zero[0]] [Number(this.zero[2])] = temp;
    }
   // display();
}
// 왼쪽
numbox.left = function() {
    this.find();
    if (this.zero[2] === "0" ) {
        
    } else {
        var temp = this.numArr[Number(this.zero[0])] [Number(this.zero[2]) - 1];
        this.numArr[Number(this.zero[0])] [Number(this.zero[2]) - 1] = this.numArr[this.zero[0]][Number(this.zero[2])];
        this.numArr[this.zero[0]] [Number(this.zero[2])] = temp;
    }
}
// 위
numbox.up = function() {
    this.find();
    if (this.zero[0] === "0" ) {
        
    } else {
        var temp = this.numArr[this.zero[0]-1][this.zero[2]];
        this.numArr[this.zero[0]-1][this.zero[2]] = this.numArr[this.zero[0]][this.zero[2]];
        this.numArr[this.zero[0]][this.zero[2]] = temp;
    }
}
// 아래
numbox.down = function() {
    this.find();
    if (this.zero[0] === "3" ) {
        
    } else {
        var temp = this.numArr[Number(this.zero[0])+1][this.zero[2]];
        this.numArr[Number(this.zero[0])+1][this.zero[2]] = this.numArr[this.zero[0]][this.zero[2]];
        this.numArr[this.zero[0]][this.zero[2]] = temp;
    }
}
///////////////////////////////

function keyUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 39) {
        rightPressed = true;
    }
}


var myshuffle = function() {
    numbox.makeArrays();
    numbox.shuffle(numbox.arrays);
    numbox.makeList();
}

var display = function() {
    ctx.clearRect(0, 0, 800,500);
    numbox.drawbox();
    numbox.drawnum();
    if(rightPressed) {
        numbox.right();
        rightPressed = false;
        
    }
    else if(leftPressed) {
        numbox.left();
        leftPressed = false;
    }
    else if(upPressed) {
        numbox.up();
        upPressed = false;
    }
    else if(downPressed) {
        numbox.down();
        downPressed = false;
    }
    numbox.arrays = numbox.numArr.join(",");
    if(numbox.arrays == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0"){
        screen.innerHTML = '정답입니다.';
        console.log('123123123213');
        clearInterval(stop);
        display();
    }
}

myshuffle();
var stop = setInterval(display,10);



