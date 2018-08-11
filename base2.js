function solution(s, n) {
    var answer = '';
    var answerArr = [];
    for (var i = 0 ; i < s.length; i++) {
        var a = s.charCodeAt(i);
        if (a <= 90 && a >= 65) {
            //Z 90 z 122  A 65 a 97
            a = a+n;
            if(a > 90) {
                var b = a - 90;
                a = 64 + b;
            }
        } else if (a <= 122 && a >= 97) {
            a = a+n;
            if(a > 122) {
                var b = a - 122;
                a = 96 + b;
            }
            
        } 
        answerArr[i]=String.fromCharCode(a);
    }
    answer = answerArr.join("");
    return answer;
}