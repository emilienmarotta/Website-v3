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
        const isClickInsideMenu = navbar.contains(event.target);
        const isClickInsideHamburger = hamburgerMenu.contains(event.target);
    
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

let isDarkModeEnabled = localStorage.getItem('darkModeEnabled');

if (isDarkModeEnabled === 'true') {
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
        moonImg.style.width = '20px';
    } else {
        moonImg.src = 'Index/moon.png';
        moonImg.style.width = '20px';
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
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
}
    

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
        moonImg.style.width = '20px';
    } else {
        moonImg.src = 'Index/moon.png';
        moonImg.style.width = '20px';
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
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkModeEnabled', 'true');
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
});



var translations = {
    fr: {
        warning: 'Le site est en phase de développement. Certaines fonctionnalités ne sont pas encore opérationnelles.',
        nav1: 'Accueil',
        nav2: 'Projets',
        nav21: 'RootMe',
        nav22: 'GitHub',
        nav3: 'Blog',
        nav4: 'Contact',
        nav41: 'Email personnel',
        nav42: 'Email professionnel',
        nav43: 'LinkedIn',
        language: 'Langue FR',
        language1: 'Anglais',
        language2: 'Français',
        presentation1: 'Étudiant en première année de licence MIASHS (Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales) à l\'IDMC de Nancy.',
        presentation21: 'Objectif professionnel :',
        presentation22: 'Devenir un professionnel de la cybersécurité maîtrisant les outils et techniques d’intelligence artificielle.',
        button1: 'Me contacter',
        button2: 'CV',
        studies: 'Études envisagées',
        studies11: 'Bac +0 à Bac +3 :',
        studies12: 'Licence MIASHS à l\'IDMC de Nancy',
        studies21: 'Bac +3 à Bac +5 :',
        studies22: 'Master MIAGE à l\'IDMC de Nancy',
        studies31: 'Bac +5 à Bac +6 :',
        studies32: 'Mastère spécialisé en cybersécurité à l\'École des Mines de Nancy',
        rootme: 'RootMe',
        rootme1: 'Root Me : Votre allié pour développer vos compétences en cybersécurité. En utilisant cette plateforme interactive, vous pouvez relever des défis et des épreuves variés pour renforcer votre expertise technique. Que vous soyez passionné ou professionnel de la sécurité informatique, RootMe vous accompagne dans votre parcours d\'apprentissage pour devenir un expert en la matière.',
        rootme11: 'La root est longue mais la voie est libre.',
        rootmeButton: 'Consulter mon profil',
        github: 'GitHub',
        github1: 'GitHub : Votre plateforme de référence pour publier et partager vos projets de développement. Grâce à GitHub, vous pouvez facilement héberger vos codes sources, collaborer avec d\'autres développeurs et bénéficier d\'un contrôle de version efficace. Partagez vos réalisations, collaborez avec la communauté et montrez votre expertise en utilisant GitHub comme votre vitrine professionnelle en ligne.',
        githubButton: 'Consulter mes projets',
        blog: 'Blog',
        blog1: 'Retrouvez ici mes articles sur des sujets liés à la technologie et à la cybersécurité.',
        blog2: 'Aucun article publié pour le moment.',
        contact: 'Contact',
        contact1: 'Email personnel',
        contact1Button: 'Me contacter',
        contact2: 'Email professionnel',
        contact2Button: 'Me contacter',
        contact3: 'LinkedIn',
        contact3Button: 'Consulter mon profil',
        update: 'Dernière mise à jour du site : 4 juin 2023',
        formation: 'Formation',
        formation1: 'Licence MIASHS',
        formation2: 'Master MIAGE',
        formation3: 'Mastère spécialisé en Cybersécurité',
        projects: 'Projets',
        projects1: 'Root Me',
        projects2: 'GitHub',
        contactv2: 'Contact',
        contactv21: 'Adresse email personnelle',
        contactv22: 'Adresse email professionnelle',
        contactv23: 'LinkedIn',
        cv: 'CV',
        cv1: 'Visualiser mon CV',
        copyright: 'Copyright © 2023 Emilien Marotta. Tous droits réservés, sauf indication contraire.'
    },
    en: {
        warning: 'The site is currently under development. Some functions are not yet operational.',
        nav1: 'Home',
        nav2: 'Projects',
        nav21: 'RootMe',
        nav22: 'GitHub',
        nav3: 'Blog',
        nav4: 'Contact',
        nav41: 'Personal email',
        nav42: 'Professional email',
        nav43: 'LinkedIn',
        language: 'Language EN',
        language1: 'English',
        language2: 'French',
        presentation1: 'First-year MIASHS (Mathematics and Computer Science Applied to the Humanities and Social Sciences) student at IDMC ',
        presentation21: 'Career objective:',
        presentation22: 'To become a cybersecurity professional with a command of artificial intelligence tools and techniques.',
        button1: 'Contact me',
        button2: 'CV',
        studies: 'Planned studies',
        studies11: 'Bac +0 to Bac +3 :',
        studies12: 'MIASHS Bachelor\'s degree at the IDMC in Nancy',
        studies21: 'Bac +3 to Bac +5 :',
        studies22: 'MIAGE Master\'s degree at the IDMC in Nancy',
        studies31: 'Bac +5 to Bac +6 :',
        studies32: 'Post Master\'s in Cybersecurity at the École des Mines in Nancy',       
        rootme: 'RootMe',
        rootme1: 'Root Me: Your ally in developing your cybersecurity skills. Using this interactive platform, you can take on a variety of challenges and tests to strengthen your technical expertise. Whether you\'re an IT security enthusiast or professional, RootMe will help you on your learning journey to become an expert in the field.',
        rootme11: 'The root is long but the way is clear.',
        rootmeButton: 'View my profile',
        github: 'GitHub',
        github1: 'GitHub : Your reference platform for publishing and sharing your development projects. With GitHub, you can easily host your source code, collaborate with other developers and benefit from effective version control. Share your work, collaborate with the community and showcase your expertise by using GitHub as your online professional showcase.',
        githubButton: 'View my projects',
        blog: 'Blog',
        blog1: 'Here you can find my articles on subjects related to technology and cybersecurity.',
        blog2: 'No article published yet.',
        contact: 'Contact',
        contact1: 'Personal email',
        contact1Button: 'Contact me',
        contact2: 'Professional email',
        contact2Button: 'Contact me',
        contact3: 'LinkedIn',
        contact3Button: 'View my profile',
        update: 'Site last updated: June 4, 2023',
        formation: 'Formation',
        formation1: 'MIASHS degree',
        formation2: 'MIASHS master',
        formation3: 'Post master in Cybersecurity',
        projects: 'Projects',
        projects1: 'RootMe',
        projects2: 'GitHub',
        contactv2: 'Contact',
        contactv21: 'Personal email address',
        contactv22: 'Professional email address',
        contactv23: 'LinkedIn',
        cv: 'CV',
        cv1: 'View my CV',
        copyright: 'Copyright © 2023 Emilien Marotta. All rights reserved, unless otherwise indicated.'
    }
}; 

let defaultLanguage = localStorage.getItem('defaultLanguage');

function changeLanguage(lang) {
    let langTranslations;
    
    if (lang === 'fr') {
        langTranslations = translations.fr;
        localStorage.setItem('defaultLanguage', 'french');
    } else {
        langTranslations = translations.en;
        localStorage.setItem('defaultLanguage', 'english');
    }
    
    let elements = document.querySelectorAll('[data-lang]');
    let i = 0;
    for (elem of elements) {
        let keys = Object.keys(langTranslations);
        elem.textContent = langTranslations[keys[i]];
        elem.setAttribute('data-lang', lang);
        i ++;
    }
}

if (defaultLanguage === 'french') {
    changeLanguage('fr');
} else {
    changeLanguage('en');
}

const langBtnFr = document.getElementById('french');
langBtnFr.addEventListener('click', () => {
    changeLanguage('fr');
});

const langBtnEn = document.getElementById('english');
langBtnEn.addEventListener('click', () => {
    changeLanguage('en');
});