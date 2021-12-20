$(function () {
  // 심화 탭메뉴
    $(".tab-nav").find("button").click(function () {
        var $this = $(this);
        var index = $this.index(),
        $tabItem = $(".tab-item");
        $this.siblings().removeClass("on");
        $this.addClass("on");
        $tabItem.hide();
        $tabItem.eq(index).show();
    });
});

// 이전/다음
var path = window.location.pathname;
var page = path.split("/").pop();

function buttonPrev(pageName) {
    var pageNumber = page.replace(pageName + "_", "").substr(0, 2);
    var pagePrev = ("0" + (parseInt(pageNumber) - 1)).slice(-2);
    var buttonPrevLink = pageName + "_" + pagePrev + ".html";
    location.href = "./" + buttonPrevLink;
}

function buttonNext(pageName) {
    var pageNumber = page.replace(pageName + "_", "").substr(0, 2);
    var pageNext = ("0" + (parseInt(pageNumber) + 1)).slice(-2);
    var buttonNextLink = pageName + "_" + pageNext + ".html";
    location.href = "./" + buttonNextLink;
}