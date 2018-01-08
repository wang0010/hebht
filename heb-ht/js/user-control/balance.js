$(function () {
    var sel = document.querySelector("#select");
    var opt = document.querySelectorAll("#select>option");
    var td = document.querySelectorAll("tbody>tr>td:nth-child(1)")
    var label = document.querySelector("#lai")
    var labe = document.querySelector("#la")
    sel.onchange = function () {
        for (var j = 0; j < td.length; j++) {
            if (td[j].innerHTML === sel.value) {
                td[j].parentElement.style.display = ""
            }
            else {
                td[j].parentElement.style.display = "none"
            }
            if (sel.value === "全部") {
                td[j].parentElement.style.display = ""
                labe.style.display = "none"
                label.style.display = "block"
            }
        }
        if (sel.value === "支出") {
            labe.style.display = "block"
            label.style.display = "none"
        } else if (sel.value === "收入") {
            labe.style.display = "none"
            label.style.display = "block"
        }
    }
})
