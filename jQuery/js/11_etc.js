$(document).ready(function(){

    var i = 1; //#print1을 클릭 했을 때에 새로 선언이 되지 않도록 바깥쪽에 선언.
    $("#print1").click(function(){ //#print1이 클릭시
        //prepend
        $("#ex1").prepend("<p>"+i+"~~~~~</p>"); //#ex1의 앞에 컨텐츠 추가
        i++; // i == 2; // i = i + 1;
    });

    var k = 1; //#print2클릭 시 새로 선언되지 않고, 다른 변수와 겹치지 않는 변수.
    $("#print2").click(function(){ //#print2 클릭 시
        // li에 대한 대략적인 CSS도 미리 추가
        for(var j = 0; j < 6; j++){ 
            //앞에서 쓴 다른 변수와 겹치지 않는 변수로 6번 도는 반복문 생성

            $("#ex2").append("<li>"+k+"</li>")//#ex2의 뒤에 컨텐츠 추가
            k++;// k = k + 1;
        }
        //append 
        /* 
            6개씩 출력이 된다.
            => 한번 클릭시 6번의 기능 수행
            => 반복문으로 출력
            클릭 => 반복문 호출 => 반복문 한번당 한번의 출력 수행
        */
    });

});