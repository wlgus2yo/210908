$(document).ready(function(){
    $("button").click(function(){
        $target = $("section:nth-child(2)").offset().top;
        $("html").animate({scrollTop:$target},700);
    });
    // parent() : 부모를 선택;
    // children() : 자식을 선택;
    // next() : 다음 형제를 선택;
    // prev() : 이전 형제를 선택;
    // ex) $(this).parent().next().css("background","red");
    /*
        각각의 섹션(마지막 제외)에 버튼을 넣고,
        그 버튼 클릭 시 다음 섹션으로 이동
        class, id, nth-~~, eq 사용 금지
    */
});