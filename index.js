const ulCSS = "style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:20%;'"

let statusMiashs = 0;
let statusMiage = 0;
let statusMines = 0;

function change_content(i) {

    if(i == 0) {
        let divMiashs = document.getElementsByClassName("about__box__intended-route__miashs")[0];
        if (statusMiashs == 0) {
            statusMiashs = 1;
            divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Mathématiques</li><li>Informatique</li><li>Intelligence Artificielle</li><li>Sciences Cognitives</li><li>Bases de Données</li><li>Droit</li><li>Économie</li><li>Gestion</li><li>Systèmes d'Information</li></ul>`;
        } else { 
            statusMiashs = 0;
            divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/miashs.png" alt="MIASHS"><div class="about__box__intended-route__element__text miashs__text">Licence MIASHS<br>(Bac à Bac+3)</div>`;
        }
    } else if(i == 1) {
        let divMiage = document.getElementsByClassName("about__box__intended-route__miage")[0];
        if (statusMiage == 0) {
            statusMiage = 1;
            divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Ingénierie Logicielle</li><li>Cloud Computing</li><li>Science des Données</li><li>Intelligence Artificielle</li><li>Business Intelligence</li><li>Gestion de Projet</li><li>Management des SI</li><li>Mathématiques</li><li>Droit Informatique</li></ul>`;
        }
         else {
            statusMiage = 0;
            divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/miage.png" alt="MIAGE"><div class="about__box__intended-route__element__text miage__text">Master MIAGE<br>(Bac+3 à Bac+5)</div>`;
        }
    } else {
        let divMines = document.getElementsByClassName("about__box__intended-route__mines")[0];
        if (statusMines == 0) {
            statusMines = 1;
            divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersécurité</a></p><ul style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:15%;'><li>Logiciels Malveillants</li><li>Rétro-Ingénierie</li><li>Sécurité Réseau</li><li>Cryptographie</li><li>Gestion de Crise</li><li>Politiques de Sécurité</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
        } else {
            statusMines = 0;
            divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/mines.png" alt="Cybersecurity"><div class="about__box__intended-route__element__text mines__text">Mastère spécialisé en<br>Cybersécurité<br>(Bac+5 à Bac+6)</div>`;
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


