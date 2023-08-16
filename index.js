var hamburgerMenu=document.querySelector('.hamburger')
var list=document.querySelector('.nav-items')
hamburgerMenu.addEventListener("click",()=>{
    list.classList.toggle('show')
})