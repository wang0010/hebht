var btn = document.querySelector(".button");
var form = document.querySelector("#form");
$(".button").on("click", function () {
    var form = $("#form ").serialize();
    $.ajax({
        url:"http://121.42.29.186:8093/manage/user_login.do",
        type: "get",
        data: form,
        dataType: "jsonp",
        jsonp: "jsonpCallback",
        success: function (data) {
            if (data.code === 1) {
                location.href = "/C:/Users/heb-DONG/Desktop/heb-ht/heb-ht/examples/index/index.html"
            }else{
                alert("账号密码不正确")
            }
        }
    })
    return false;
})