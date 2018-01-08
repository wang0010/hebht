
function btn() {
    return button = "<button style='width:1rem;height:0.4rem;background:white;border:1px solid #ff6600;border-radius:0.04rem;float:right;margin-right:1rem;color:#ff6600;font-size:0.18rem;'>"
        + "删除"
        + "</button>"
} btn()
$(function () {
    var period = document.querySelector(".class-period")
    var classBox = document.getElementById("class-box")
    var sel = document.querySelector(".class-attr>select")
    var btn = document.querySelector(".add-class")
    var arr = [];
    $(btn).on("click", function () {
        if (sel.value === "普通课程") {
            var c = $(classBox).clone(true);
            arr.push(c)
            $(period).append(c)
            $(c).append(button)
        }
        for (var i = 0; i < arr.length; i++) {
            var rem = $(arr[i].children()[9]);
        }
        $(rem).on("click", function () {
            $(this).parent().css("display", "none")
        })
    })
})

$(function () {
    var period = document.querySelector("#class-period")
    var sel = document.querySelector(".class-attr>select")
    var box = document.getElementById("class-period")
    var box1 = document.querySelector(".class-period")
    var btn = document.querySelector(".add-class")
    var arr = [];
    sel.onchange = function () {
        if (sel.value === "课时数量") {
            var btn = document.querySelector("#add-class")
            box.style.display = "block"
            box1.style.display = "none"
        } else {
            box.style.display = "none"
            box1.style.display = "block"
        }
    }

    $(btn).on("click", function () {
        if (sel.value === "课时数量") {
            var c = $("#class-box1").clone(true);
            arr.push(c)
            $(box).append(c)
            $(c).append(button)
        }
        for (var i = 0; i < arr.length; i++) {
            var rem = $(arr[i].children()[7]);
        }
        $(rem).on("click", function () {
            $(this).parent().css("display", "none")
        })
    })
})



$(function () {
    var sel = document.querySelector(".activity-course>.class>.class-attr>select")
    var box = document.querySelector("#class-period1")
    var box1 = document.querySelector(".activity-course>.class-period")
    var btn = document.querySelector(".activity-course>.add-class")
    var arr = []
    sel.onchange = function () {
        if (sel.value === "课时数量") {
            box.style.display = "block"
            box1.style.display = "none"
        } else {
            box.style.display = "none"
            box1.style.display = "block"
        }
    }
})