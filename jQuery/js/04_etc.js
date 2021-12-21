$(document).ready(function(){

    // 정렬 버튼
    $(".horizontal").click(function(){
        var $numb = $(".imgWrap img").length;
        for(i=0; i<$numb; i++){
            $(".imgWrap img").eq(i).css("left",150*i);
            //누구한테?
            //150의 배수 커진다.
        }
        // i = 0 : $(".imgWrap img").eq(0).css("left",150*0);
        // i = 1 : $(".imgWrap img").eq(1).css("left",150*1);
        // i = 2 : $(".imgWrap img").eq(2).css("left",150*2);
        // i = ..
        // i = 8 : $(".imgWrap img").eq(8).css("left",150*8);
    });

    //초기화 버튼
    $(".reset").click(function(){
        $(".imgWrap img").css("left",0);
    });






    $(".alignMix").click(function(){
        var $img = $(".imgMix img");
        var $imgWidth = $img.width(); // 높이랑 동일
        var $imgHeight = $img.height();
        // for(i = 0; i < $img.length; i++){
        //     var $target = $img.eq(i);
        //     var $xPos = i % 3 * $imgWidth;
        //     var $yPos = parseInt(i / 3) * $imgHeight;
        //     $target.css({"left":$xPos,"top":$yPos});
        // }
        var $sum = 0;
        var $line = 0;
        for(i = 0; i < $img.length; i++){
            var $target = $img.eq(i);
            $target.css("left",$sum);
            $target.css("top",$line);
            $(".imgMix").css("height",$imgWidth*(($line/200)+1)+"px");
            $sum = $sum + $imgWidth;
            if(i % 3 == 2){
                $sum = 0;
                $line = $line + 200;
            }
        }
        // % => left;
        // / => top;
        /*
          0 1 2 // left: 0 200 400, top:0;
          3 4 5 // left: 0 200 400, top:200;
          6 7 8 // left: 0 200 400, top:400;
        */
    });


    $(".resetMix").click(function(){
        $(".imgMix img").css({"left":"0", "top":"0"});
    });
<<<<<<< HEAD
});
=======
});
>>>>>>> 9e99e010291427b14e833f611fd7e01fad7feade
