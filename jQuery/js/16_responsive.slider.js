var $check;
$(document).ready(function(){
    // 670을 기준으로 모바일에서는 슬라이더 생성
    // PC에서는 슬라이더 X;
    var $width = $(window).width();
    if($width >= 670){
        // 슬라이더X
    }else{
        call_swiper();
        $check = "YES";
    }

    $(window).resize(function(){
        console.log($check)
        var $width = $(window).width();
        // 슬라이더가 있냐 없냐를 판별하는 방법
        // 1. hasClass라는 클래스 유무를 판단. ex) swiper-initialized
        // 2. 별도의 체크용 변수 생성.
        if($width >= 670){
            // 슬라이더가 있다면 파괴
            console.log("1");
            if($check == "YES"){ // $check가 "YES"라면 슬라이더가 존재한다.
                // => 파괴
            console.log("1-1");
                $check = "NO";
                swiper.destroy();
                swiper = undefined;
                $(".swiper-wrapper").attr("style","");
                $(".swiper-slide").attr("style","");
            }else{ // $check가 "YES"가 아니라면 슬라이더가 존재X.
                // 없다면 X
            console.log("1-2");
            }
        }else{
            console.log("2");
            if($check == "YES"){ // $check가 "YES"라면 슬라이더가 존재한다.
                console.log("2-1");
                // => 슬라이더가 있다면 X
            }else{ // $check가 "YES"가 아니라면 슬라이더가 존재X.
                // 슬라이더가 없다면 생성
            console.log("2-2");
                call_swiper();
                $check == "YES";
            }
        }
    });

    var swiper = undefined;
    function call_swiper(){
        swiper = new Swiper(".mySwiper", {
            navigation: {
                nextEl:".swiper-button-next",
                prevEl:".swiper-button-prev"
            },
            pagination:{
                el:".swiper-pagination",
                clickable: true,
            },
            slidesPerView: 2,
            spaceBetween: 30,
        });
    }
});