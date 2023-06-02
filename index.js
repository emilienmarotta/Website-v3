document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


const hamburgerMenu = document.getElementById('hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('mobile-menu');
});


const bannerImage = document.getElementById('banner-img');

function changeImageSource() {
    if (window.innerWidth < 1000 && window.innerWidth >= 600) {
        bannerImage.src = 'Index/medium-banner.png';
    } else if (window.innerWidth < 600 && window.innerWidth >= 500) {
        bannerImage.src = 'Index/small-banner.png';
    } else if (window.innerWidth < 500) {
        bannerImage.src = 'Index/mini-banner.png';
    } else {
        bannerImage.src = 'Index/banner.png';
    }
}

window.addEventListener('resize', changeImageSource);

changeImageSource();


const menuItems = document.querySelectorAll('.nav-link');
menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        if (navbar.classList.contains('mobile-menu')) {
            navbar.classList.toggle('mobile-menu');    
        }
    });
});


document.addEventListener('click', function(event) {
    if (navbar.classList.contains('mobile-menu')) {
        const isClickInsideMenu = hamburgerMenu.contains(event.target);
        const isClickInsideHamburger = navbar.contains(event.target);
    
        if (!isClickInsideMenu && !isClickInsideHamburger) {
            navbar.classList.toggle('mobile-menu');
        }
    }
});


const arrowImg = document.querySelectorAll('.arrows');
const moonImg = document.getElementById('theme');
const worldImg = document.getElementById('world');
const hamburgerImg = document.getElementById('hamburger-menu');
const studiesImg = document.getElementById('studiesImg');
const rootmeImg = document.getElementById('rootmeImg');
const githubImg = document.getElementById('githubImg');

const themeButton = document.getElementById('theme');
const itemsToChangeColor = document.querySelectorAll('.change-color');
themeButton.addEventListener('click', () => {
    for (item of itemsToChangeColor) {
        item.classList.toggle('dark-theme');
    }
    for (img of arrowImg) {
        img.classList.toggle('img-dark-theme');
        if (img.classList.contains('img-dark-theme')) {
            img.src = 'Index/arrow2.png';
        } else {
            img.src = 'Index/arrow.png';
        }
    }
    moonImg.classList.toggle('img-dark-theme');
    if (moonImg.classList.contains('img-dark-theme')) {
        moonImg.src = 'Index/sun.png'; 
        moonImg.style.width = '25px';
        moonImg.style.position = 'relative';
        moonImg.style.right = '3px';
    } else {
        moonImg.src = 'Index/moon.png';
        moonImg.style.width = '20px';
        moonImg.style.position = 'inherit';
    }
    worldImg.classList.toggle('img-dark-theme');
    if (worldImg.classList.contains('img-dark-theme')) {
        worldImg.src = 'Index/world2.png';
        
    } else {
        worldImg.src = 'Index/world.png';
    }
    hamburgerImg.classList.toggle('img-dark-theme');
    if (hamburgerImg.classList.contains('img-dark-theme')) {
        hamburgerImg.src = 'Index/hamburger2.png';
    } else {
        hamburgerImg.src = 'Index/hamburger.png';
    }
    studiesImg.classList.toggle('img-dark-theme');
    if (studiesImg.classList.contains('img-dark-theme')) {
        studiesImg.src = 'Index/studies2.png';
    } else {
        studiesImg.src = 'Index/studies.png';
    }
    rootmeImg.classList.toggle('img-dark-theme');
    if (rootmeImg.classList.contains('img-dark-theme')) {
        rootmeImg.src = 'Index/rootme2.png';
    } else {
        rootmeImg.src = 'Index/rootme.png';
    }
    githubImg.classList.toggle('img-dark-theme');
    if (githubImg.classList.contains('img-dark-theme')) {
        githubImg.src = 'Index/github2.png';
    } else {
        githubImg.src = 'Index/github.png';
    }
});