function btn(box, arr, fir, las) {
    arr.onclick = function () {
        if ($(fir).css("display") == "none") {
            $(fir).slideDown(300)
            $(las).slideDown(300)
            box.innerHTML = "收起"
            this.style.transform = "rotate(0deg)"
        } else {
            $(fir).slideUp(300)
            $(las).slideUp(300)
            box.innerHTML = "展开"
            this.style.transform = "rotate(180deg)"
        }
    }
}
var arr = document.querySelectorAll(".down")
var box = document.querySelectorAll(".upDown")
for (var j = 0; j < box.length; j++) {
    var list = box
}
for (var i = 0; i < arr.length; i++) {
    btn(list[0], arr[0], $(".first"), $(".last"))
    btn(list[1], arr[1], $(".first1"), $(".last1"))
    btn(list[2], arr[2], $(".first2"), $(".last2"))
    btn(list[3], arr[3], $(".first3"), $(".last3"))
    btn(list[4], arr[4], $(".first4"), $(".last4"))
    btn(list[5], arr[5], $(".first5"), $(".last5"))
}