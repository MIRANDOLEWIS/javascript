const moosun = document.querySelector(".moosun")
const change = document.querySelector(".change")

moosun.addEventListener("click",function(){
  moosun.classList.toggle("active"),
  change.classList.toggle("active")
})
