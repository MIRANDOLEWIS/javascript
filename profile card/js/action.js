const child_1 = document.querySelector(".child_1")
const child_2 = document.querySelector(".child_2")
const parent = document.querySelector(".parent")


child_1.addEventListener("click", function(){
  child_1.classList.toggle("active")
  
})

child_2.addEventListener("click", function(){
  child_2.classList.toggle("active")

})
