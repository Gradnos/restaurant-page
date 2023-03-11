import './style.css';
import { home } from './home';
import { about } from './about';

const content = document.querySelector("#content");
//content.innerHTML = home();


let navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach(navButton => {
    navButton.addEventListener("click", e =>{
        navButtons.forEach(navButton =>{
            navButton.classList.remove("selected");
        });
        navButton.classList.add("selected");
    });
});

let homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", e =>{
    content.innerHTML = home();
});

let menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", e =>{
    content.innerHTML = menu();
});

let aboutButton = document.querySelector(".about-button");
aboutButton.addEventListener("click", e =>{
    content.innerHTML = about();
});

