const button = document.getElementById('navbar-button');
const mobileMenu = document.querySelector('.mobile-menu-container');

button.addEventListener('click', () => {
    mobileMenu.classList.add('show-mobile-menu')
})

function scrollActive() {
    const scrollY = pageYOffset;
    sections.forEach( section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

    if (sectionId) {

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    }
    })
}

window.addEventListener('scroll', scrollActive )