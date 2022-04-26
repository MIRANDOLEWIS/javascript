const hamburger = document.querySelector(".hamburger")
const bar = document.querySelector(".bar")
const close = document.querySelector(".close")
const nav_block  = document.querySelector(".nav_block")
hamburger.addEventListener("click",function(){

		bar.classList.toggle("active")
		close.classList.toggle("active")
		nav_block.classList.toggle("active")


})
