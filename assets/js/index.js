const button = document.getElementById('navbar-button');
const mobileMenu = document.querySelector('.mobile-menu-container');
const sections = document.querySelectorAll('.section');

document.addEventListener('click', (event) => {
    if (event.target?.id !== "mobile-menu-button") {
        mobileMenu.classList.remove('show-mobile-menu')
    }
})

button.addEventListener('click', () => {
    mobileMenu.classList.toggle('show-mobile-menu')
})

function scrollActive(ev) {
    const scrollY = pageYOffset;
    sections.forEach( section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('document end')
        document.querySelector('.nav-item a[href*=contact]').classList.add('active')
    }

    if (sectionId) {
        document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active')
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav-item a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
    })
}

window.addEventListener('scroll', scrollActive )