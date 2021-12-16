$(document).ready(function(){
    tabUI();
});

function tabUI(){
    $(".tab").click(function(){
        /* 순서에 따른 방식
        $(".tab").removeClass("active"); // .tab에 전체 클래스 제거 removeClass()
        $(this).addClass("active"); // 클릭된 나 자신 $(this) 에만 클래스 삽입 addClass();
        var $index = $(this).index(); // 클릭된 나 자신의 순서(인덱스 번호)를 변수에 저장
        $(".tabPage").removeClass("active"); //.tabPage 전체에 클래스 제거
        $(".tabPage").eq($index).addClass("active"); // 클릭된 .tab의 번호($index)와 순서가 같은 .tabPage에 클래스 추가
        */
        
        //순서가 다를경우 직접 선택
        $(".tab").removeClass("active");
        $(this).addClass("active");

        var tabNumb = $(this).attr("data-tab");
        //tabNumb라는 변수에 클릭된 나 자신의 attribute 중 data-tab의 값을 담는다.

        $(".tabPage").removeClass("active");
        $("#"+tabNumb).addClass("active");
        //$("#"+tabNumb) => $("#"+"tab3") => $("#tab3")
        
        
        // console.log($(this)); // 클릭 된 자신
        // console.log($(this).index()); // .index() : 인덱스 넘버
    });
    /*  
        클릭하면 => li가 클릭되면
        tab Menu가 바뀌고 => tab Menu active 클래스 조절
        tab Page가 바뀌고 => tab Page active 클래스 조절
    */
}