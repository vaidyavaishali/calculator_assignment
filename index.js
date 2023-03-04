let buttons = document.querySelectorAll(".btn")
let input = document.querySelector("#input")
// console.log(buttons.value)
let toggle = true
let str = ""
Array.from(buttons).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let val = e.target.value
        if (val == "C") {
            str = ""
            input.value = str
        }else if (val == "=") {
            if(str == ""){
                return
            }
            str = eval(str)
            input.value = str
            if (str.toString().includes(".")) {
                console.log("hh")
                toggle = false
            } else {
                toggle = true
            }
        }else if(val == "Del"){
            str = str.toString()
            str = str.slice(0, str.length-1)
            input.value = str
        }else {
            if (val == ".") {
                console.log("hu")
                console.log(toggle)
                if (toggle === true) {
                    console.log(str[str.length-1])
                    if ((str[str.length - 1] == "+" || str[str.length - 1] == "-" || 
                    str[str.length - 1] == "*" ||
                     str[str.length - 1] == "/" ||
                      str[str.length - 1] == ".") && (val == "+" || val == "-" || val == "*" || val == "/" || val == ".")) {
                        // console.log("val")
                        return
                    }
                    if (str == "" && (val == "/" || val == "*" || val == ".")) {
                        input.value = str
                        return;
                    }
                    str += val
                    input.value = str
                    toggle = false

                } else {
                    return
                }

            }else if(["+", "/", "*", "-"].includes(val)){
                if ((str[str.length - 1] == "+" || str[str.length - 1] == "-" || str[str.length - 1] == "*" || str[str.length - 1] == "/" || str[str.length - 1] == ".") && (val == "+" || val == "-" || val == "*" || val == "/" || val == ".")) {
                    return
                }
                if (str == "" &&(val == "/" || val == "*" || val == ".")) {
                    input.value = str
                    return;
                }
                str += val
                input.value = str
                toggle = true
            }else{
                console.log(str[str.length-1])
                if ((str[str.length - 1] == "+" || str[str.length - 1] == "-" || str[str.length - 1] == "*" || str[str.length - 1] == "/" || str[str.length - 1] == ".") && (val == "+" || val == "-" || val == "*" || val == "/" || val == ".")) {
                    return
                }
                if (str == "" && (val == "/" || val == "*" || val == ".")) {
                    input.value = str
                    return;
                }
                str += val
                input.value = str
            
            }
        }
    })
})