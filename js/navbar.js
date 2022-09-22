/* NAV BAR */

const collapsibleMenu = document.querySelector("#collapsible-menu");
const btnMenuClose = document.querySelector("#btn-nav-close");
const btnBurger = document.querySelector("#btn-burger");/* 
const mainTitle = document.querySelector('#header-title')
const mainIcons = document.querySelector('.header-btn-container') */


const showMenu = (e) => {
    collapsibleMenu.classList.toggle('nav-open');
    /* mainTitle.classList.toggle('header-title-dark');
const showMenu = () => {
    collapsibleMenu.classList.toggle('nav-open');/* 
    mainTitle.classList.toggle('header-title-dark');
    mainIcons.classList.toggle('header-btn-container-open'); */
}

btnBurger.addEventListener('click', showMenu);

btnMenuClose.addEventListener('click', showMenu);


window.addEventListener('click', (e)=>{
    if (!collapsibleMenu.contains(e.target) && (!btnMenuClose.contains(e.target)) && (!btnBurger.contains(e.target))){
        collapsibleMenu.classList.remove('nav-open');
    } 
})