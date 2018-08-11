var input = 'hellow';
var numbox = {n:100};
var canvas = document.getElementById('puzzle');
numbox.makeList = function() {
    this.arrays = input.split('');
}

numbox.draw = function() {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.font = "20px malgun gothic"; //폰트의 크기, 글꼴체 지정      
        for(var i = 0 ; i < this.arrays.length; i++) {
            ctx.fillStyle ="#FF0000";
            ctx.fillRect(25+(i*this.n), 25, 50, 50);
            // 문자값
            ctx.fillStyle ="#FFFF00";
            ctx.fillText(this.arrays[i],45+(i*this.n),55);

        }
    }
}
numbox.numpush = function() {
    this.numshift =this.arrays.shift();
    this.arrays.push(this.numshift);
}

var mypush = function() {
    numbox.numpush();
    numbox.draw();
}