var a = solution(10);
function solution(n) {
    var answer = 0;
    var primArr = [0,0];
    var primArr2 = [];
    for ( var i = 2; i <= n ; i++ ) {
        primArr[i]= i;
    }
    for (var i = 2; i <= Math.sqrt(n) ; i ++) {
        if (primArr[i] === 0) {
            continue;
        }
        for (var j = i+i; j<= n; j +=i )  {
            primArr[j] = 0;
        }
        
    }
    for (var i =0; i < primArr.length; i ++ ) {
        if( primArr[i] !== 0) {
            primArr2.push(primArr[i]);
        }
    }
    console.log(primArr2);
    answer = primArr2.length;
    return answer;
}