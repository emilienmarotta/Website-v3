document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('mobile-menu')
});


const bannerImage = document.getElementById('banner-img');

function changeImageSource() {
    if (window.innerWidth < 750 && window.innerWidth >= 600) {
        bannerImage.src = 'Index/medium-banner.png';
    } else if (window.innerWidth < 600 && window.innerWidth >= 450) {
        bannerImage.src = 'Index/small-banner.png';
    } else if (window.innerWidth < 450) {
        bannerImage.src = 'Index/mini-banner.png';
    } else {
        bannerImage.src = 'Index/banner.png';
    }
}

window.addEventListener('resize', changeImageSource);

changeImageSource();


const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        navbar.classList.toggle('mobile-menu');    
    });
});


document.addEventListener('click', function(event) {
    const isClickInsideMenu = hamburgerMenu.contains(event.target);
    const isClickInsideHamburger = navbar.contains(event.target);

    if (!isClickInsideMenu && !isClickInsideHamburger) {
        navbar.classList.toggle('mobile-menu');
    }
});
