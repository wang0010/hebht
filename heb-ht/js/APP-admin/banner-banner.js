$(function () {
    silde();
    banner();
})
var silde = function () {
    var box = document.querySelector(".banner-photo");
    var content = document.querySelector(".banner-list")
    var scrollBox = document.querySelector(".scrollbox")
    var bar = document.querySelector(".bar")

    var bili1 = box.clientHeight / content.offsetHeight;
    var barHeight = bili1 * scrollBox.offsetHeight;
    bar.style.height = barHeight + "px";
    bar.onmousedown = function (event) {
        event = event || window.event;
        var pageyy = event.pageY || scroll().top + event.clientY;
        var bary = bar.offsetTop;
        var y = pageyy - bary;

        document.onmousemove = function (event) {
            event = event || window.event;
            var pagey = event.pageY || scroll().top + event.clientY;
            pagey = pagey - y;
            if (pagey < 0) {
                pagey = 0;
            }
            if (pagey > scrollBox.offsetHeight - barHeight) {
                pagey = scrollBox.offsetHeight - barHeight;
            }
            bar.style.top = pagey + "px";
            var bili2 = (content.offsetHeight - box.clientHeight) / (scrollBox.offsetHeight - barHeight);
            var yy = pagey * bili2;
            content.style.top = -yy + "px";
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    }
    document.onmouseup = function () {
        document.onmousemove = null;
    }
}

var banner = function () {
    var box = document.querySelector(".banner-list");
    var ul = box.children;
    for (var i = 0; i < ul.length; i++) {
        var liList = ul[i].children;
        for (var j = 0; j < liList.length; j++) {
            liList[j].onclick = function () {
                var input = document.querySelector(".relevance>input")
                input.value = this;
                var span = document.querySelectorAll(".yon>span>i");
                var that = this;
                span[0].onclick = function () {
                    if (that) {
                        that.style.boxShadow = "1px 5px 5px 2px #ccc"
                        that.style.transition = "all .3s"
                        $(this).css("background", "url('../../images/web/banner_yes_default.png')")
                        $(span[1]).css("background", "url('../../images/web/854857640923165682.png')")
                    }
                    $(that).siblings("li").css("boxShadow", "")
                    $(that).parent("ul").siblings("ul").children("li").css("boxShadow", "")
                }
                span[1].onclick = function () {
                    if (that) {
                        that.style.boxShadow = ""
                        that.style.transition = "all .3s"
                        $(this).css("background", "url('../../images/web/banner_yes_default.png')")
                        $(span[0]).css("background", "url('../../images/web/854857640923165682.png')")
                    }
                }
            }
        }
    }
}
