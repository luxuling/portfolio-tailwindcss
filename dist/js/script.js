const hamburger = document.getElementById("hamburger")
const navItem = document.getElementById("nav-item")
hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("hamburger-active")
  navItem.classList.toggle("hidden")
})

window.addEventListener("click", function(e){
  if(e.target != hamburger && e.target != navItem){
    hamburger.classList.remove("hamburger-active")
    navItem.classList.add("hidden")
  }
})


window.onscroll = ()=>{
  const header = document.querySelector("header")
  const navMenu = header.offsetTop
  const upBtn = document.getElementById("upBtn")
  if(window.pageYOffset > navMenu){
    header.classList.add("navMenu-active")
    upBtn.classList.remove("hidden")
    upBtn.classList.add("flex")
  }else{
    header.classList.remove("navMenu-active")
    upBtn.classList.remove("flex")
    upBtn.classList.add("hidden")
  }
}

const checkbox = document.getElementById("checkbox")
     const html = document.querySelector("html")
     checkbox.addEventListener("click",function(){
        if(checkbox.checked){
          html.classList.add("dark")
          localStorage.theme = "dark"
        }else{
          html.classList.remove("dark")
          localStorage.theme = "light"
        }
     })
     
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  checkbox.checked = true
} else {
  checkbox.checked = false
}