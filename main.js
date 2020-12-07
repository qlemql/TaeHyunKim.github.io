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

const contactMe = document.querySelector('#home');

contactMe.addEventListener("click", ()=>{
    scrollIntoView('#contact');
});

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth", block:"center"});
}