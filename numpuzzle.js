
var numbox = {w:75, h:100,arrays:[]};
// w 세로 h 가로
var canvas = document.getElementById('puzzle');
var ctx = canvas.getContext('2d');     

var upPressed = false;
var downPressed = false;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keyup", keyUpHandler, false);
var screen = document.getElementById('screen');



// 배열 정렬
numbox.makeArrays = function() {
    numbox.arrays = [];
    // 초기화  
    for (var i = 1; i < 16; i++) {
        numbox.arrays.push(i);
    }
    numbox.arrays.push(0);
}

numbox.makeList = function() {
    this.numArr = new Array(4);
    for ( var i =0; i< 4; i ++) {
        this.numArr[i] = this.arrays.splice(0,4);
    }
}


// 랜덤정렬 1 ( 퍼즐이 안맞춰지는 문제가 발생)
numbox.shuffle = function(arrays) {
    for ( var i =arrays.length-1; i>0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrays[i];
        arrays[i] = arrays[j];
        arrays[j] = temp;
    }
}

// 랜덤정렬 2 
numbox.shuffle2 = function() {
    var shuffleNums = 0;
    for ( var i = 0 ; i < 1000; i++) {
        shuffleNums = Math.floor(Math.random() * (4));
        if ( shuffleNums === 0) {
            this.zeroUp();
        }
        else if ( shuffleNums === 1) {
            this.zeroDown();
        }
        else if ( shuffleNums === 2) {
            this.zeroLeft();
        }
        else if ( shuffleNums === 3) {
            this.zeroRight();
        }
    }
} 



//////////////////////////////////////////
// 그리기
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
/// 시간을 그리는 함수
function drawTime() {
    var time = new Date();
    ctx.textAlign = "start";     
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Time: "+time, 8, 20);
}
////////////////////////////////////////////////////


////////////////////////동작
// 빈공간인 0 위치 찾기
numbox.find = function() {
    for ( var i = 0 ; i < 4; i++) {
        var find = this.numArr[i].indexOf(0); 
        if(find ===-1) {
        } else {
            this.zero = i+" "+this.numArr[i].indexOf(0);
        }
    }
}
// 오른쪽
numbox.zeroRight = function() {
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
numbox.zeroLeft = function() {
    this.find();
    if (this.zero[2] === "0" ) {
        
    } else {
        var temp = this.numArr[Number(this.zero[0])] [Number(this.zero[2]) - 1];
        this.numArr[Number(this.zero[0])] [Number(this.zero[2]) - 1] = this.numArr[this.zero[0]][Number(this.zero[2])];
        this.numArr[this.zero[0]] [Number(this.zero[2])] = temp;
    }
}
// 위
numbox.zeroUp = function() {
    this.find();
    if (this.zero[0] === "0" ) {
        
    } else {
        var temp = this.numArr[this.zero[0]-1][this.zero[2]];
        this.numArr[this.zero[0]-1][this.zero[2]] = this.numArr[this.zero[0]][this.zero[2]];
        this.numArr[this.zero[0]][this.zero[2]] = temp;
    }
}
// 아래
numbox.zeroDown = function() {
    this.find();
    if (this.zero[0] === "3" ) {
        
    } else {
        var temp = this.numArr[Number(this.zero[0])+1][this.zero[2]];
        this.numArr[Number(this.zero[0])+1][this.zero[2]] = this.numArr[this.zero[0]][this.zero[2]];
        this.numArr[this.zero[0]][this.zero[2]] = temp;
    }
}
///////////////////////////////


////// 키보드 입력 인식 
function keyUpHandler(e) {
    if(e.keyCode == 38) {
        upPressed = true;
        keyEvent();
    }
    else if(e.keyCode == 40) {
        downPressed = true;
        keyEvent();
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
        keyEvent();
    }
    else if(e.keyCode == 39) {
        rightPressed = true;
        keyEvent();
    }
}
// 키보드 값에 대해 매칭하는 함수 실행
function keyEvent() {
    if(rightPressed) {
        numbox.zeroRight();
        rightPressed = false;
        
    }
    else if(leftPressed) {
        numbox.zeroLeft();
        leftPressed = false;
    }
    else if(upPressed) {
        numbox.zeroUp();
        upPressed = false;
    }
    else if(downPressed) {
        numbox.zeroDown();
        downPressed = false;
    }
}
////////////////////////////////////


// 랜덤값 만들기
var myshuffle = function() {
    numbox.makeArrays();
    numbox.makeList();
    numbox.shuffle2();
}


// 캔퍼스에 그림을 지속적으로 출력한다. 
var display = function() {
    ctx.clearRect(0, 0, 800,500);
    drawTime();
    numbox.drawbox();
    numbox.drawnum();
    
    numbox.arrays = numbox.numArr.join(",");
    if(numbox.arrays == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0"){
        screen.innerHTML = '정답입니다.';
        console.log('123123123213');
        clearInterval(stop);
       // display();
    }
}

// 시작시 렌덤값을 구하게 하기
myshuffle();
// 화면 출력
var stop = setInterval(display,10);



