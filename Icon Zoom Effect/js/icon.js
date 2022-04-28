

const clicker = document.querySelector(".clicker")
const container = document.querySelector(".container")
const font = document.querySelector(".font")
const clrchg = document.querySelector(".clrchg ")
const clickme = document.getElementById("clickme")

clicker.addEventListener("click",function(){
 clicker.classList.toggle("active")
 container.classList.toggle("active")
 font.classList.toggle("active")
 clrchg.classList.toggle("active")

})
