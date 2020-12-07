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

// Handle scrolling when tapping on the navbar menu

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener("click",(event)=>{
    console.log(event.target.dataset.link);
    const target = event.target;
    const link = target.dataset.link;
    if(link === null){
        return;
    }
    
    scrollIntoView(link);
});


// Handle click on "contact me" button on home

const contactMe = document.querySelector('.home__container');

contactMe.addEventListener("click", ()=>{
    scrollIntoView('#contact');
});

// Make home slowly fade to transparent as the window scroll down

const home = document.querySelector('#home');
const homeHight = home.getBoundingClientRect().height

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHight;
});

// Show "Arrow up" Button when scrolling down

const arrowUp = document.querySelector(".arrowBtn");

document.addEventListener("scroll",()=>{
    if(window.scrollY > homeHight / 2 ){
        arrowUp.classList.add("visible");
    } else{
        arrowUp.classList.remove('visible')
    }});

// Handle click on the ""arrow up" button

arrowUp.addEventListener("click",()=>{
    scrollIntoView('#home');
})

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth", block:"center"});
}