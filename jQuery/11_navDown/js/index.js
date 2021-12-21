$(document).ready(function(){
    var $navTop = $("nav").offset().top;
    var $navHeight = $("nav").height();

    $(window).scroll(function(){
        var $scrollTop = $(window).scrollTop();
        if($scrollTop >= $navTop){

            $("nav").addClass("sticky");

            if($(".back").length == 0){
                $("nav").after("<div class='back' style='height:"+$navHeight+"px;'></div>");
                console.log("만들겠습니다.");
            }else{
                console.log("만들었음.");
            }

        }else{

            $("nav").removeClass("sticky");

            if($(".back").length == 1){
                $(".back").remove();
            }

        }
    });

/*
    var $navTop = $("nav").offset().top;
    var $navHeight = $("nav").height();
    var $check = "back이 없음";

    $(window).scroll(function(){
        console.log($check);
        var $scrollTop = $(window).scrollTop();
        if($scrollTop >= $navTop){
            $("nav").addClass("sticky");
            // 생기고
            if($check == "back이 없음"){
                $("nav").after("<div class='back' style='height:"+$navHeight+"px;'></div>");
                $check = "back이 있음";
            }
        }else{
            $("nav").removeClass("sticky");
            // 없어진다
            if($check == "back이 있음"){
                $(".back").remove();
                $check = "back이 없음";
            }
        }
    });
*/


});