$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        },
        pagination:{
            el:".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        // Demo를 확인하면서 진행
        // 한 화면당 4개씩 출력
        // 버튼 클릭 또는 드래그시 
        // 한번에 4개씩 넘어가도록 수정
    });
});