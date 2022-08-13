const hamburger = document.getElementById("hamburger")
const navItem = document.getElementById("nav-item")
hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("hamburger-active")
  navItem.classList.toggle("hidden")
})


window.onscroll = ()=>{
  const header = document.querySelector("header")
  const navMenu = header.offsetTop
  if(window.pageYOffset > navMenu){
    header.classList.add("navMenu-active")
  }else{
    header.classList.remove("navMenu-active")
  }
}