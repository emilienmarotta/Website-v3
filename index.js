const ulCSS = "style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:20%;'"

let statusMiashs = 0;
let statusMiage = 0;
let statusMines = 0;

let language = "english";

function change_content(i) {

    if(i == 0) {
        let divMiashs = document.getElementsByClassName("about__box__intended-route__miashs")[0];
        if (statusMiashs == 0) {
            statusMiashs = 1;
            if (language == "english") {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul ${ulCSS}><li>Mathematics</li><li>Computer Science</li><li>Artificial Intelligence</li><li>Cognitive Science</li><li>Data Bases</li><li>Law</li><li>Economics</li><li>Management</li><li>Information Systems</li></ul>`;
            } else {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Mathématiques</li><li>Informatique</li><li>Intelligence Artificielle</li><li>Sciences Cognitives</li><li>Bases de Données</li><li>Droit</li><li>Économie</li><li>Gestion</li><li>Systèmes d'Information</li></ul>`;
            }
        } else { 
            statusMiashs = 0;
            if (language == "english") {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/miashs.png" alt="MIASHS"><div class="about__box__intended-route__element__text miashs__text">MIASHS degree<br>(Bac to Bac+3)</div>`;
            } else {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/miashs.png" alt="MIASHS"><div class="about__box__intended-route__element__text miashs__text">Licence MIASHS<br>(Bac à Bac+3)</div>`;
            }
        }
    } else if(i == 1) {
        let divMiage = document.getElementsByClassName("about__box__intended-route__miage")[0];
        if (statusMiage == 0) {
            statusMiage = 1;
            if (language == "english") {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul ${ulCSS}><li>Software Engineering</li><li>Cloud Computing</li><li>Data Science</li><li>Artificial Intelligence</li><li>Business Intelligence</li><li>Project Management</li><li>MIS</li><li>Applied Mathematics</li><li>IT Law</li></ul>`;
            } else {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Ingénierie Logicielle</li><li>Cloud Computing</li><li>Sciences des Données</li><li>Intelligence Artificielle</li><li>Business Intelligence</li><li>Gestion de Projet</li><li>Management des SI</li><li>Mathématiques</li><li>Droit Informatique</li></ul>`;
            }
        } else {
            statusMiage = 0;
            if (language == "english") {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/miage.png" alt="MIAGE"><div class="about__box__intended-route__element__text miage__text">MIAGE master's degree<br>(Bac+3 to Bac+5)</div>`;
            } else {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/miage.png" alt="MIAGE"><div class="about__box__intended-route__element__text miage__text">Master MIAGE<br>(Bac+3 à Bac+5)</div>`;
            }
        }
    } else {
        let divMines = document.getElementsByClassName("about__box__intended-route__mines")[0];
        if (statusMines == 0) {
            statusMines = 1;
            if (language == "english") {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersecurity</a></p><ul ${ulCSS}><li>Malwares</li><li>Reverse Engineering</li><li>Network Security</li><li>Cryptography</li><li>Crisis Management</li><li>Security Policies</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
            } else {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersécurité</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Logiciels Malveillants</li><li>Rétro-Ingénierie</li><li>Sécurité Réseau</li><li>Cryptographie</li><li>Gestion de Crise</li><li>Politiques de Sécurité</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
            }
        } else {
            statusMines = 0;
            if (language == "english") {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/mines.png" alt="Cybersecurity"><div class="about__box__intended-route__element__text mines__text">Specialised master's degree<br>in Cybersecurity <br>(Bac+5 to Bac+6)</div>`;
            } else {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px" title="Programme"><span></span><img src="Index/mines.png" alt="Cybersecurity"><div class="about__box__intended-route__element__text mines__text">Mastère spécialisé en<br>Cybersécurité<br>(Bac+5 à Bac+6)</div>`;
            }
        }
    }
}


function updateYearCC() {
    const now = new Date();
    const year = now.getFullYear();

    document.getElementsByClassName("low-footer__year")[0].innerHTML = year;
}

let ongoing_animation = false;

function shake_up(i) {
    let info_button = document.querySelectorAll(".about__box__intended-route__element__button");
    if (!ongoing_animation) {
        ongoing_animation = true;
        info_button[i].style = "width: 35px;top: 10px;left: 10px;border-radius: 50%;animation: shake-up 0.8s";
        setTimeout(() => {
            info_button[i].style = "width: 35px;top: 10px;left: 10px;border-radius: 50%;";
            ongoing_animation = false;
        }, 800);
    }
}


function change_boxes_lang(i) {
    if (i == 0) {
        let divMiashs = document.getElementsByClassName("about__box__intended-route__miashs")[0];
        if (language == "english") {
            if (statusMiashs == 1) {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul ${ulCSS}><li>Mathematics</li><li>Computer Science</li><li>Artificial Intelligence</li><li>Cognitive Science</li><li>Data Bases</li><li>Law</li><li>Economics</li><li>Management</li><li>Information Systems</li></ul>`;
            }
        } else {
            if (statusMiashs == 1) {
                divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Mathématiques</li><li>Informatique</li><li>Intelligence Artificielle</li><li>Sciences Cognitives</li><li>Bases de Données</li><li>Droit</li><li>Économie</li><li>Gestion</li><li>Systèmes d'Information</li></ul>`;
            }
        }
    } else if (i == 1) {
        let divMiage = document.getElementsByClassName("about__box__intended-route__miage")[0];
        if (language == "english") {
            if (statusMiage == 1) {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul ${ulCSS}><li>Software Engineering</li><li>Cloud Computing</li><li>Data Science</li><li>Artificial Intelligence</li><li>Business Intelligence</li><li>Project Management</li><li>MIS</li><li>Applied Mathematics</li><li>IT Law</li></ul>`;
            }
        } else {
            if (statusMiage == 1) {
                divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Ingénierie Logicielle</li><li>Cloud Computing</li><li>Sciences des Données</li><li>Intelligence Artificielle</li><li>Business Intelligence</li><li>Gestion de Projet</li><li>Management des SI</li><li>Mathématiques</li><li>Droit Informatique</li></ul>`;
            }
        }
    } else {
        let divMines = document.getElementsByClassName("about__box__intended-route__mines")[0];
        if (language == "english") {
            if (statusMines == 1) {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersecurity</a></p><ul ${ulCSS}><li>Malwares</li><li>Reverse Engineering</li><li>Network Security</li><li>Cryptography</li><li>Crisis Management</li><li>Security Policies</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
            }
        } else {
            if (statusMines == 1) {
                divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px" title=""><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersécurité</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Logiciels Malveillants</li><li>Rétro-Ingénierie</li><li>Sécurité Réseau</li><li>Cryptographie</li><li>Gestion de Crise</li><li>Politiques de Sécurité</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
            }
        }
    }
}


function change_language_button() {
    const button = document.getElementsByClassName('language__choice')[0];
    const french_img = "<img src=\"Index/french.png\">";
    const english_img = "<img src=\"Index/english.png\">";

    if (button.innerHTML == english_img) {
        button.innerHTML = french_img;
        button.title = "Site in english";
        language = "french";
        for (let i = 0; i < 3; i ++) {
            change_boxes_lang(i);
        }
        translate_in_french();
    } else {
        button.innerHTML = english_img;
        button.title = "Site en français";
        language = "english";
        for (let i = 0; i < 3; i ++) {
            change_boxes_lang(i);
        }
        translate_in_english();
    }
}

function translate_in_french() {
    // Header 
    const menu_elements = document.getElementsByClassName("menu__element");
    menu_elements[0].innerHTML = "Accueil";
    menu_elements[1].innerHTML = "À propos";
    
    // Introduction
    const contact_button = document.getElementsByClassName("introduction__me-box__contact-button")[0];
    const cv_button = document.getElementsByClassName("introduction__me-box__cv-button")[0];
    contact_button.innerHTML = "Me contacter";
    contact_button.title = "M'envoyer un email";
    cv_button.title = "Télécharger mon CV";
    const status = document.getElementsByClassName("introduction__status-box__status")[0];
    const title = document.getElementsByClassName("introduction__status-box__title")[0];
    const description = document.getElementsByClassName("introduction__status-box__description")[0];
    status.innerHTML = "Statut";
    title.innerHTML = "Étudiant en Mathématiques & Informatique à l'IDMC - Nancy";
    description.innerHTML = "J'étudie les mathématiques et l'informatique dans le but de travailler dans la cybersécurité.";

    // About
    const about__box__about = document.getElementsByClassName("about__box__about")[0];
    const about__box__title = document.getElementsByClassName("about__box__title")[0];
    about__box__about.innerHTML = "À propos";
    about__box__title.innerHTML = "Études envisagées";
    const miashs__text = document.getElementsByClassName("miashs__text")[0];
    const miage__text = document.getElementsByClassName("miage__text")[0];
    const mines__text = document.getElementsByClassName("mines__text")[0];
    if (miashs__text !== undefined) {
        miashs__text.innerHTML = "Licence MIASHS<br>(Bac à Bac+3)";
    }
    if (miage__text !== undefined) {
        miage__text.innerHTML = "Master MIAGE<br>(Bac+3 à Bac+5)";
    }
    if (mines__text !== undefined) {
        mines__text.innerHTML = "Mastère spécialisé en<br>Cybersécurité<br>(Bac+5 à Bac+6)";
    }

    // Blog
    const blog__empty = document.getElementsByClassName("blog__empty")[0];
    blog__empty.innerHTML = "Rien pour l'instant...";
    
    // Contact
    const contact__box__title = document.getElementsByClassName("contact__box__title")[0];
    contact__box__title.innerHTML = "Moyens de me contacter";

    // Footer
    const high__footer__element__title = document.getElementsByClassName("high-footer__element__title");
    high__footer__element__title[0].innerHTML = "Études";
    high__footer__element__title[2].innerHTML = "Projets";
    const high__footer__element__elements__cybersecurity = document.getElementsByClassName("high-footer__element__elements__cybersecurity")[0];
    high__footer__element__elements__cybersecurity.innerHTML = "<a href='https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/'>Cybersécurité</a>";
    const high__footer__element__elements__download = document.getElementsByClassName("high-footer__element__elements__download")[0];
    high__footer__element__elements__download.innerHTML = "<a href='Index/cv.pdf' target='_blank'>Télécharger</a>";
}

function translate_in_english() {
    // Header 
    const menu_elements = document.getElementsByClassName("menu__element");
    menu_elements[0].innerHTML = "Home";
    menu_elements[1].innerHTML = "About";

    // Introduction
    const contact_button = document.getElementsByClassName("introduction__me-box__contact-button")[0];
    const cv_button = document.getElementsByClassName("introduction__me-box__cv-button")[0];
    contact_button.innerHTML = "Contact Me";
    contact_button.title = "Send me an email";
    cv_button.title = "Download my CV";
    const status = document.getElementsByClassName("introduction__status-box__status")[0];
    const title = document.getElementsByClassName("introduction__status-box__title")[0];
    const description = document.getElementsByClassName("introduction__status-box__description")[0];
    status.innerHTML = "Status";
    title.innerHTML = "Mathematics & Computer Science Student at IDMC - Nancy";
    description.innerHTML = "I study mathematics and computer science in order to work in cybersecurity.";

    // About
    const about__box__about = document.getElementsByClassName("about__box__about")[0];
    const about__box__title = document.getElementsByClassName("about__box__title")[0];
    about__box__about.innerHTML = "About";
    about__box__title.innerHTML = "Intended studies";
    const miashs__text = document.getElementsByClassName("miashs__text")[0];
    const miage__text = document.getElementsByClassName("miage__text")[0];
    const mines__text = document.getElementsByClassName("mines__text")[0];
    if (miashs__text !== undefined) {
        miashs__text.innerHTML = "MIASHS degree<br>(Bac to Bac+3)";
    }
    if (miage__text !== undefined) {
        miage__text.innerHTML = "MIAGE master's degree<br>(Bac+3 to Bac+5)";
    }
    if (mines__text !== undefined) {
        mines__text.innerHTML = "Specialised master's degree<br>in Cybersecurity<br>(Bac+5 to Bac+6)";
    }

    // Blog
    const blog__empty = document.getElementsByClassName("blog__empty")[0];
    blog__empty.innerHTML = "Nothing at this time...";

    // Contact
    const contact__box__title = document.getElementsByClassName("contact__box__title")[0];
    contact__box__title.innerHTML = "Ways to contact me";

    // Footer
    const high__footer__element__title = document.getElementsByClassName("high-footer__element__title");
    high__footer__element__title[0].innerHTML = "Studies";
    high__footer__element__title[2].innerHTML = "Projects";
    const high__footer__element__elements__cybersecurity = document.getElementsByClassName("high-footer__element__elements__cybersecurity")[0];
    high__footer__element__elements__cybersecurity.innerHTML = "<a href='https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/'>Cybersecurity</a>";
    const high__footer__element__elements__download = document.getElementsByClassName("high-footer__element__elements__download")[0];
    high__footer__element__elements__download.innerHTML = "<a href='Index/cv.pdf' target='_blank'>Download</a>";
}