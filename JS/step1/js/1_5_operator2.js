// TODO.1
/*
    자신의 이름을 한 글자씩 나누어서 별도의 변수에 담은 후
    결과값을 새로운 변수에 담아서 출력
    출력 결과 : "제 이름은 OOO입니다."
*/
function myName(){
    var a = "박";
    var b = "근";
    var c = "영";
    var name = a + b + c;
    console.log("제 이름은 " + name + "입니다.");
    alert("제 이름은 " + name + "입니다.");
    document.write("제 이름은 " + name + "입니다.");
}

// TODO.2
/*
    증감 연산자를 이용해서 다음 숫자가 출력되도록 하라.
    ++; --;
    console : 10
    console : 12
    console : 11
    console : 10
*/
function numbOper(){
    var a = 10;
    // 변수++, 변수-- : 라인이 출력 된 후에 증감.
    // ++변수, --변수 : 라인이 출력 되기 전 증감.
    console.log(a++); //10 이 나오도록, 10을 출력 후 11로.
    console.log(++a); //12 이 나오도록, 12를 출력 후 종료. 
    console.log(--a); //11 이 나오도록, 11을 출력 후 종료.
    console.log(--a); //10 이 나오도록, 10을 출력 후 종료.
}