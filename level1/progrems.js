var board2 = [];

var str = '';

var board = [
];




var randomA = Math.floor(Math.random()*(50))+1;
var randomB = Math.floor(Math.random()*(50))+1;
for (var j = 0; j < randomB; j++ ) {
    var boardi = [];
    for ( var i = 0; i < randomA; i++ ) {
        if (Math.floor(Math.random()*10)> 5) {
            boardi.push(0);
        }
        else {
            boardi.push(1);
        }
    }
    board2.push(boardi);
}
for(var i = 0; i < board2.length; i++) {
    str += "[" +board2[i]+"], <br>";
}
////////랜덤값 구현
var screen = document.getElementById('screen');
screen.innerHTML = str;

function solution(board)
{
    var answer = 0;
    var board = board;
    var boardRow = board[0].length;
    // 행
    var boardColumn = board.length;
    // 열
    var squareRowList = [];
    for(var i = 0; i < boardColumn; i++) {
        squareRowList.push(isOneCount(board[i]));
    }
    var squareMaxRow = Math.max.apply(null,squareRowList);
    //var squareRow = (boardRow > boardColumn) ? boardColumn : boardRow;
    // board 가 나타낼 수 있는 최대 넓이는 boardRow*boardRow
    
    for ( var i = squareMaxRow; i > 0; i--) {
        //console.log(i);
        // 넓이 값 참거짓 판별 함수 실행 찾으면 0 아니면 줄이기
        // i 는 squareRow 정사각형의 밑변
        if(boardinSquare(i,boardColumn,board) == true) {
            answer = i*i;
            break;
        }
    }
    console.log("답:" +answer);
    return answer;
}

function boardinSquare(squareRow, boardColumn, board ) {
    // square 의 값을 받아 비교하고 비트연산을 이용해 값을 판단함.
    var result = false;
    for( var i = 0; i <= boardColumn - squareRow; i++) {
        var compare1 = board[i];    
        for (var j = i; j < i+squareRow-1; j++) {
            compare1 = mybitwiseOperation(compare1,board[j+1]);
            if(isOneCount(compare1) < squareRow) {
                break;
            }
           // console.log("j: "+ j + "배열"+compare1);
        }
        if (isOneCount(compare1) >= squareRow) {
            result = true;
            return result;
        }

    }
    return result;   
}


/// 수정하자
function isOneCount(board) {
    var count = 0;
    var maxCount = 0; 
    for (var i = 0; i < board.length; i++) {
        if(board[i] == 1) {
            count++;
        }
        else {
            if(maxCount < count){
                maxCount = count;
            }
            count = 0;
        }
    }
    maxCount = (maxCount > count) ? maxCount : count;
    //console.log("맥스카운터 " +maxCount);
    return maxCount;
}

function isOneCount2(board, squareRow) {
    var count = 0;
    var maxCount = 0; 
    for (var i = 0; i < board.length; i++) {

    maxCount = (maxCount > count) ? maxCount : count;
    //console.log("맥스카운터 " +maxCount);
    return maxCount;
    }
}

function mybitwiseOperation(a,b) {
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if(a[i] * b[i] == 1) {
            result[i] = 1;
        }
        else {
            result[i] = 0;
        }
    }
    return result;
}
//console.log(isOneCount(board[1]));
//mybitwiseOperation(board[0],board[1]);

//console.log(boardinSquare(3,6,board));

solution(board2);