const btn = document.querySelector(".btn")
const parent = document.querySelector(".parent")

parent.addEventListener("click",function(){
  btn.classList.toggle("active")
  parent.classList.toggle("active").innerText

})
