let buttons = document.querySelectorAll(".btn")
let input = document.querySelector("#input")
console.log(buttons.value)

function addValue(e){
    input.value += e
}
function calculate(){
    input.value = eval(input.value)
}
function Reset(){
    input.value = ""
}
