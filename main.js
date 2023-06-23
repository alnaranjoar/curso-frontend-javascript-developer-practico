const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu')


navEmail.addEventListener('click', toggleDesktopMenu)
burgerMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive') //toggle activa o inactiva dependiendo del estado. 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

