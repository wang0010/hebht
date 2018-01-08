$(function () {
    var li = document.querySelectorAll(".sss");
    for (var i = 0; i < li.length; i++) {
        $(li[i]).on("click", function () {
            var html = document.querySelector(".silde-info>h4")
            if (this.click == 0) {
                html.innerHTML = "";
            } else {
                html.innerHTML = this.innerHTML;
            }
        })
    }
})

$(function(){
     var aInput = document.getElementsByTagName("input");
     var i = 0;
     for (i = 0; i < aInput.length - 1; i++)
     {
      aInput[i].onfocus = function ()
      {
       this.style.borderColor = "#6b7bf6"
      };
      aInput[i].onblur = function ()
      {
        this.style.borderColor = "#ccc"
      } 
     }
})