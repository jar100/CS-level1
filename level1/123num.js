
function solution(n) {
    var answer = '';
    var stringNum = '';
    var num = n;
    var digit = 1; 
    var digitNum = Math.pow(3,digit);
    while(digitNum < n) { 
        digit += 1;
        digitNum += Math.pow(3,digit);
        console.log(digit +'digit    ' + digitNum + '숫자');

    }
    for ( var i = 1; i <=  digit; i ++) {
        num = num - Math.pow(3,(digit-i));
        
        num = num- Math.pow(3,(digit-i));
    }
    
    console.log(digit);
    return answer ;
}
solution(40);
