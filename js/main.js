//**************** Show Menu ****************/

//selection Dom Element
const menu= document.getElementById('nav-menu');
const toggle= document.getElementById('nav-toggle');
const nav_close= document.getElementById('nav-close');

//function view menu
if(toggle){
    toggle.addEventListener('click', ()=>{
        menu.classList.add('show-menu');
    });
};

//Menu hidden

if(nav_close){
 nav_close.addEventListener('click', ()=>{
    menu.classList.remove('show-menu');
 });
};

//**************** REMOVE MENU MOVILE ****************/

const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const menu = document.getElementById('nav-menu');
    //when we click on each nav__link, we remove the show-menu class

    menu.classList.remove('show-menu');
} 

navLink.forEach(n => n.addEventListener('click', linkAction));


/* Add blur header */

const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >=50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)
