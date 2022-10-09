//NAvbar
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navBar')

menu.addEventListener('click',() => {
    navbar.classList.toggle('change')
    menu.classList.toggle('change')
})
//End of Navbar