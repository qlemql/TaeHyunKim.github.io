'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");

const navbarHeight = navbar.getBoundingClientRect().height;


document.addEventListener('scroll', () =>{
    console.log(window.scrollY);
    console.log(`navbarHeight:${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--gray')
    } else{
        navbar.classList.remove('navbar--gray')
    }
})

function int(){

};

int();