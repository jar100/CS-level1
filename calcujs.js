// 메인함수
function main() {
}
let str = [''];
let count = 0;
let str2 = '';
let screen1 = document.getElementById('output');
let screen2 = document.getElementById('screen');

var clickNums = function(event) {
    str[count] += event.target.innerHTML;
    console.log(event.target.innerHTML);
    str2 += event.target.innerHTML;
    screen2.innerHTML = str2;
}

var clickOthers = function(event) {
    if( event.target.innerHTML != 'BS'){

        str.push('');
        count++;
        str[count] += event.target.innerHTML;
        str2 += event.target.innerHTML;
        console.log(event.target.innerHTML);
        screen2.innerHTML = str2;
        str.push('');
        count++;
    } else if (event.target.innerHTML = 'BS') {
        str = [''];
        str2 ='';
        count = 0;
        screen1.innerHTML ='답: 0';
        screen2.innerHTML = '';
    }

}



// 계산기 동작
// 4가지 케이스에 따라 동작하게 만듬
// 답도 출력하게 만듬
var calcu = function(input) {
    var reselt =0;
    var screen = document.getElementById('output');
    changeInput(input);
    reselt = input[0];
    for (var i = 0; i< input.length; i++) {
        switch (input[i]) {
            case '+':
            reselt = (reselt +input[i+1]);
            break;
            case '-':
            reselt =(reselt -input[i+1]);
            break;
            case '*':
            reselt =(reselt *input[i+1]);
            break;
            case '/':
            reselt =(reselt /input[i+1]);
            break;
        }
    }
    screen1.innerHTML ='답: '+reselt;
}

//배열 값중 숫자는 숫자로 변경 사실 필요없는듯?
var changeInput = function(input) {
    for(var i = 0; i < input.length; i++) {
        if(input[i] === '+' || input[i] === '-' || input[i] === '/' || input[i] === '*' || input[i] === '=' ) {
        
        } else {
            input[i] = Number(input[i]);
        }
    }
}