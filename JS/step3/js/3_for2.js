// for문을 사용할 것.
/*HW.1
    원하는 구구단의 단수를 입력받아서 출력하기
    ex ) 3을 입력받았을 시
    3 X 1 = 3
    3 X 2 = 6
    3 X 3 = 9
    ...
    3 X 9 = 27
*/
function gugudan(){
    var numb = window.prompt("원하는 단수를 입력하세요."); //입력받기
    numb = Number(numb); // 숫자화
    var txt = ""; // 빈 문자열 생성
    if(!isNaN(numb)){ // isNaN(문자) == ture => !isNaN(숫자) == true
        if(numb > 9 || numb <= 0){ // numb가 9보다 크거나 0보다 같거나 작으면 실행
           console.log("Do Nothing") 
        }else{ //그 외에 실행
            for(i = 1; i<=9; i++){
                txt += numb + " X " + i + " = " + numb * i +"<br>";
            }
            document.write(txt); //문자열 출력
        }
    }
}

/*
HW.2
var data = ["10","30","70",....."125"];
data에 몇개가 들어가든 배열의 총합을 출력.
*/
function arraySum(){
    var data = ["10","30","70","15","20","3","125"]; // 273
    var result = 0;
    for(i = 0; i < data.length; i++){
        result = result + Number(data[i]);
    }
    console.log(result);
}