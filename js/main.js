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

/****************** Show Scroll Up ****************************/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag withthe scrollup class 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')

}

window.addEventListener('scroll', scrollUp)


/*********************************************Scroll sections active link**************************************************/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a [href*=' + sectionId +']' )

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-link')
    } else {
        sectionClass.classList.remove('active-link')
    }

    })
}

window.addEventListener('scroll', scrollActive)