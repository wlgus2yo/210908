function runAlert(){
    alert("HELLO WORLD!");
    /*알람창*/
}
function runLog(){
    console.log("HELLO WORLD!@");
    /*콘솔창 출력*/
}
function runWrite(){
    document.write("HELLO ~ js")
}
/*
    함수 : 가장 작은 기능의 단위
*/



function calc(num1, num2){
    var c = num1 * num2;
    return c;
}
var result = calc(3, 4);
console.log(result);