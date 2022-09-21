/* NAV BAR */

const collapsibleMenu = document.querySelector("#collapsible-menu");
const btnMenuClose = document.querySelector("#btn-nav-close");
const btnBurger = document.querySelector("#btn-burger");
const mainTitle = document.querySelector('#header-title')
const mainIcons = document.querySelector('.header-btn-container')


const showMenu = (e) => {
    collapsibleMenu.classList.toggle('nav-open');
    mainTitle.classList.toggle('header-title-dark');
    mainIcons.classList.toggle('header-btn-container-open');
}

btnBurger.addEventListener('click', showMenu);

btnMenuClose.addEventListener('click', showMenu);