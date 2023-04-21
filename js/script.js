// active menu hamburger
const menuIcon = document.querySelector('#menu')

menuIcon.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('active')
})

// if clicked on nav link
const navLinks = document.querySelectorAll('header nav a')

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('active')
    })
})

// active scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    header.classList.toggle('sticky', window.scrollY > 50)
})