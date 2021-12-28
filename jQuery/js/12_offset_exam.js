$(document).ready(function(){
    $("a").click(function(E){
        E.preventDefault();
        var $target = $(this).attr("data-offset");
        var $offset = $("#"+$target).offset().top;
        $("html").animate({scrollTop:$offset});
    });

    //scrollE();
    scrollE2();
    //scrollE3();
});

/* 
    스크롤이 될 때 각각 섹션의 div가 투명 => 불투명
        transform:translateY(80px) => 0
        CSS/Jquery
        jquery의 CSS, class, 

    1. 스크롤이 될 때에
    2. 현재 스크롤값을 받아서
    3. 각각 섹션의 위치값과 비교해서 나타나게 한다.
        3-1. CSS에서 기본값 설정
        3-2. JS를 통한 CSS or Class를 통한 CSS로 나타나는 상태 구현.
*/
// #sec01 ~ #sec04
function scrollE(){
    $(window).scroll(function(){ // 1. $(window)가 scroll이라는 이벤트가 발생 했을 때.
        var $top = $(window).scrollTop(); //2. $top 이라는 변수를 선언함과 동시에 현재의 스크롤 위치값을 담는다(초기화).
        var $offset1 = $("#sec01").offset().top; // 0
        var $offset2 = $("#sec02").offset().top; // 936
        var $offset3 = $("#sec03").offset().top; // 1872
        var $offset4 = $("#sec04").offset().top; // 2808
        // if($top >= $offset1){
        //     $("#sec01").addClass("active");
        // }else if($top >= $offset2){
        //     $("#sec02").addClass("active");
        // }else if($top >= $offset3){
        //     $("#sec03").addClass("active");
        // }else if($top >= $offset4){
        //     $("#sec04").addClass("active");
        // }
        if($top >= $offset4 - ($(window).height()/2)){
            $("#sec04").addClass("active");
        }else if($top >= $offset3 - ($(window).height()/2)){
            $("#sec03").addClass("active");
        }else if($top >= $offset2 - ($(window).height()/2)){
            $("#sec02").addClass("active");
        }else if($top >= $offset1 - ($(window).height()/2)){
            $("#sec01").addClass("active");
        }
    });
}

function scrollE2(){
    $(window).scroll(function(){ //1. $(window)에 scroll이라는 이벤트가 발생 했을 때.
        var $top = $(window).scrollTop(); //2. $top 이라는 변수를 선언함과 동시에 현재의 스크롤 위치값을 담는다(초기화).
        var $sec = $("section"); //3. 편하게 쓰기위해 $sec이라는 변수에 전체 section을 담는다.
        for(i = 0; i < $sec.length; i++){ //4. 반복문으로 0번째 섹션부터 마지막 섹션까지만큼의 횟수 실행
            //4-1. length는 갯수이므로 양수다. 없는건 0, 한개는 1
            //4-2. eq(), index() 번호는 순서이므로, 첫번째가 0 두번째가 1....
            //4-2. eq(마지막) = length - 1;
            //4-3. section 5개. length == 5; eq(4)가 마지막.
            var $offset = $sec.eq(i).offset().top - $(window).height()/2; //5. i번째 섹션의 offset().top값을 $offset에 담음
            if($top >= $offset){ //6. 조건 비교
                $sec.eq(i).addClass("active"); //7. 참일시 실행
            }
        }
        /*
            if(i == 0)
            var $offset = $sec.eq(0).offset().top;
            if($top >= $offset){
                $sec.eq(0).addClass("active");
            }

            if(i == 1)
            var $offset = $sec.eq(1).offset().top;
            if($top >= $offset){
                $sec.eq(1).addClass("active");
            }

            if(i == 2)
            var $offset = $sec.eq(2).offset().top;
            if($top >= $offset){
                $sec.eq(2).addClass("active");
            }

            if(i == 3)
            var $offset = $sec.eq(3).offset().top;
            if($top >= $offset){
                $sec.eq(3).addClass("active");
            }
        */
    });
    /*
        if(){ //첫번째 조건 비교
            //첫번째 조건이 참이라면 실행 후 조건문 종료
        }else if(){ //첫번째 조건이 false라면 두번째 조건비교
            //두번째 조건이 참이라면 실행 후 조건문 종료
        }else{ // 두번째 조건도 false라면 마지막 조건 비교
            //실행 후 조건문 종료
        }
    */
}

function scrollE3(){
    $(window).scroll(function(){ // 1. 윈도우가 스크롤 됬을때
        var $top = $(window).scrollTop(); // 2. $top에 스크롤위치값 담는다.
        $("body > section").each(function(){
            // 3-1. each()는 각각의 대상에 한번씩 실행.
            // 3-2. 즉 첫번째 섹션부터 마지막 섹션까지 한번씩 훑음. (scrollE2의 for문처럼)
            var $offset = $(this).offset().top; // $(this) : 나 자신.
            if($top >= $offset){
                $(this).addClass("active");
            }
        });
    });
}