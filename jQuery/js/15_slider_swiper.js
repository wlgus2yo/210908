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
        spacePerGroup: 4,
    });
});