// 메인함수

let input = {'arr':[]};

input.getInput = function() {
    return this.arr.join("");
}

input.empty = function() {
    return this.arr.length === 0;
}

input.removeAll = function() {
    this.arr = [];
}

input.getValue = function() {
    var str = this.arr.shift();
    var n = Number(str);
    return n;
}

input.getOperator = function() {
    var op = this.arr.shift();
    if ( op === '+' || op === '-' || op === '/' || op === '*' || op === '='  ) {
        return op;
    } else {
        return ;
    }

}


let calculator = {};
calculator.calculate = function(result,second,op) {
    var ret;
    switch(op) {
        case '+':
        ret = (result +second);
        break;
        case '-':
        ret =(result -second);
        break;
        case '*':
        ret =(result *second);
        break;
        case '/':
        ret =(result /second);
        break;
        default:
        return NaN;

    }
    return ret;
}



let str2 = '';
let screen1 = document.getElementById('output');
let screen2 = document.getElementById('screen');

var clickNums = function(event) {
    var num= event.target.innerHTML;
    input.arr.push(num);
    console.log(event.target.innerHTML);
    str2 = input.getInput();
    screen2.innerHTML = str2;
}

var clickOthers = function(event) {
    if( event.target.innerHTML != 'BS'){
        var str= event.target.innerHTML;
        input.arr.push(" "+str+" ");
        str2 = input.getInput();;
        console.log(event.target.innerHTML);
        screen2.innerHTML = str2;
    } else if (event.target.innerHTML = 'BS') {
        input.arr.pop();
        str2 =input.getInput();
        screen2.innerHTML = str2;
    }

}



// 계산기 동작
// 4가지 케이스에 따라 동작하게 만듬
// 답도 출력하게 만듬
var calcu = function(inputNum) {
    input.arr = input.getInput().split(" ");
    var result = input.getValue();
    while (!input.empty()) {
        var op = input.getOperator();
        var second = input.getValue();
        result = calculator.calculate(result,second,op);
    }
    screen1.innerHTML = result;
    input.removeAll();
}

