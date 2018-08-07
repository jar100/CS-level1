// 메인함수
function main() {
}
let str = [''];
let count = 0;

var clickNums = function(event) {
    str[count] += event.target.innerHTML;
    console.log(event.target.innerHTML);
}

var clickOthers = function(event) {
    if( event.target.innerHTML != 'BS'){

        str.push('');
        count++;
        str[count] += event.target.innerHTML;
        console.log(event.target.innerHTML);
        str.push('');
        count++;
    } else if (event.target.innerHTML = 'BS') {
        str = [''];
        count = 0;
        var screen = document.getElementById('output');
        screen.innerHTML ='0';
    }

}


// 연산자  개수

var findStr = function(input) {
    let count1 = 0 ;
    for (var i = 0 ; i < input.length; i++) {
        if(input[i] === '+' || input[i] === '-' || input[i] === '/' || input[i] === '*' ) {
            conut1++;
        } else if (input[i] === '=') {
            count1++;
        }
    }
    return count1;
}

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
    screen.innerHTML ='답: '+reselt;
}


var changeInput = function(input) {
    for(var i = 0; i < input.length; i++) {
        if(input[i] === '+' || input[i] === '-' || input[i] === '/' || input[i] === '*' || input[i] === '=' ) {
        
        } else {
            input[i] = Number(input[i]);
        }
    }
}