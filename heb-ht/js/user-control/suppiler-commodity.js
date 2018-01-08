$(function(){
    var commodity = document.querySelector("#commodity");
    var type = document.querySelector("#type");
    var first = document.querySelector("#first")
    var last = document.querySelector("#last")
    var btn = document.querySelector("button")
    var box = document.querySelector(".info-box")
    var arr = []
    btn.onclick = function(){
      var c = $("#append").clone(true)
      $(box).append(c);
      arr.push(c)
      for(var i=0;i<arr.length;i++){
          var rem = $(arr[i]).children()[1];
      }
      $(rem).on("click",function(){
        $(this).parent().css("display","none")
     })
     $(c).css("display","block")
    }
    commodity.onchange = function(){
        if(commodity.value === "兑换商品"){
            type.style.display = "none"
        }else {
            type.style.display = ""
        }
        if(commodity.value === "兑换商品"){
            first.style.display = "none"
            last.style.display = "block"
        }else if(commodity.value === "普通商品"){
            first.style.display = "block"
            last.style.display = "none"
        }
    }
})

$(function(){
    var box = document.querySelector(".info-box")
    var btn = document.querySelector("#btn")
    var arr = []
    btn.onclick = function(){
      var c = $("#append").clone(true)
      $(box).append(c);
      arr.push(c)
      for(var i=0;i<arr.length;i++){
          var rem = $(arr[i]).children()[1];
      }
      $(rem).on("click",function(){
        $(this).parent().css("display","none")
     })
     $(c).css("display","block")
    }
})


$(function(){
    var img = document.querySelector(".photo")
    var pa = document.querySelector(".commodity-list")
    img.onclick = function(){
        var c = $(img).clone(true);
        $(pa).append(c)
        var i = $(c).children()[1]
    }
})