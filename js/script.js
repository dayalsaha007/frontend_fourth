const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 60)
});

//mobile responsive menue

let menu = document.querySelector('#menu_ico');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('bx-x');
    menu.classList.toggle('open');
};