$(document).ready(function(){
    var $leng = $(".slide").length;
    var i = 0;
    var timer;
    
    //1. 페이지네이션 안에 불릿 생성
    for(j = 0; j < $leng; j++){
        //생성!
        $(".pagination").append("<span></span>")
    }
    //2. 페이지네이션 불릿 클릭시 해당 넘버로 이동
    /*
        무엇을 (이벤트 핸들러) : .pagination span
        어떤 이벤트를 발생시켰을 때(이벤트) : click
        어떤 기능을 수행할 것인가(함수) : function(){
            - 타이머 종료 : clearInterval(timer)
            - i값을 변환을 시켜야 한다.
            - 클릭 대상 중 나 자신의 index 넘버로.
            - active(); 
            - 타이머 실행 : start();
        }
    */
   $(".pagination span").click(function(){
        clearInterval(timer);
        i = $(this).index();
        active();
        start();
   });

    start();
    function start(){
        timer = setInterval(function(){
            if(i == $leng - 1){
                i = 0;
            }else{
                i++;
            }
            active();
        },3000);
    }

    function active(){
        // fadeOut : 투명도를 서서히 0까지 만든 후 display:none;
        // fadeIn : display를 상황에 따라 block;등으로 만든 후 투명도를 서서히 1까지
        $(".slide").stop().fadeOut(500);
        $(".slide").eq(i).stop().fadeIn(500);
        //fadeIn(number) : number ms 동안 변화.
    }

    // slide : fadeIn
    $(".btn_next").click(function(){
        clearInterval(timer);
        // 슬라이드 안보이게
        // 특정 슬라이드 보이게
        if(i == $leng - 1){
            i = 0;
        }else{
            i++;
        }
        active();
        start();
    });

    $(".btn_prev").click(function(){
        clearInterval(timer);
        if(i == 0){
            i = $leng - 1;
        }else{
            i--;
        }
        active();
        start();
    });
});
/*
i == 0;
eq(0).fadeOut
eq(1).fadeIn
i++;
i == 1
eq(1).fadeOut
eq(2).fadeIn
i++;
i == 2
eq(2).fadeOut
eq(3).fadeIn
i++;
i == 3
eq(3).fadeOut
eq(4).fadeIn
*/