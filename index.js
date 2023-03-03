let buttons = document.querySelectorAll(".btn")
let input = document.querySelector("#input")
// console.log(buttons.value)
let str = ""

Array.from(buttons).forEach((buttons) => {
    buttons.addEventListener("click", (e) => {
        // console.log(e.target.value)
        if (e.target.value == "C") {
            str = ""
            input.value = str
        }else if(e.target.value == "Del") {
            str = str.toString()
            str = str.slice(0, str.length-1)
            input.value = str
        }
        else if (e.target.value == "=") {
            if (str == "") {
                return
            }
            str = eval(str)
            console.log(str)
            input.value = str
        } else {
            if ((e.target.value == "+" || e.target.value == "-" || e.target.value == "*" || e.target.value == "/" || e.target.value == ".") && (str[str.length - 1] == "+" || str[str.length - 1] == "-" || str[str.length - 1] == "*" || str[str.length - 1] == "/" || str[str.length - 1] == ".")) {
                return
            }
            if(str == "" && (e.target.value == "." || e.target.value == "/" || e.target.value == "*")){
                input.value = str
                return
            }
            str += e.target.value
            input.value = str
        }
    })
})