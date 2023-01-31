const ulCSS = "style='z-index:8;display:flex;flex-direction:column;justify-content:center;width:100%;margin-left:20%;'"

let statusMiashs = 0;
let statusMiage = 0;
let statusMines = 0;

function change_content(i) {

    if(i == 0) {
        let divMiashs = document.getElementsByClassName("about__box__intended-route__miashs")[0];
        if (statusMiashs == 0) {
            statusMiashs = 1;
            divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/parcours-miashs/">MIASHS</a></p><ul ${ulCSS}><li>Mathematics</li><li>Computer Science</li><li>Artificial Intelligence</li><li>Cognitive Science</li><li>Data Bases</li><li>Law</li><li>Economics</li><li>Management</li><li>Information Systems</li></ul>`;
        } else {
            statusMiashs = 0;
            divMiashs.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/miashs.png" alt="MIASHS"><div class="about__box__intended-route__element__text">MIASHS degree <br>(Bac to Bac+3)</div>`;
        }
    } else if(i == 1) {
        let divMiage = document.getElementsByClassName("about__box__intended-route__miage")[0];
        if (statusMiage == 0) {
            statusMiage = 1;
            divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://idmc.univ-lorraine.fr/idmc-parcours-miage/">MIAGE</a></p><ul ${ulCSS}><li>Software Engineering</li><li>Cloud Computing</li><li>Data Science</li><li>Artificial Intelligence</li><li>Business Intelligence</li><li>Project Management</li><li>MIS</li><li>Applied Mathematics</li><li>IT Law</li></ul>`;
        } else {
            statusMiage = 0;
            divMiage.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/miage.png" alt="MIAGE"><div class="about__box__intended-route__element__text">MIAGE master's degree <br>(Bac+3 to Bac+5)</div>`;
        }
    } else {
        let divMines = document.getElementsByClassName("about__box__intended-route__mines")[0];
        if (statusMines == 0) {
            statusMines = 1;
            divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/back.png" alt="Back" style="width:35px"><span></span><p style='z-index:8;color:#6495ed'><a href="https://mines-nancy.univ-lorraine.fr/formation/mastere-specialise-cybersecurite-attaque-defense-des-systemes-informatiques/">Cybersecurity</a></p><ul ${ulCSS}><li>Malware</li><li>Reverse Engineering</li><li>Network Security</li><li>Cryptography</li><li>Crisis Management</li><li>Security Policy</li><li>Communications</li><li>Forensic</li><li>OS & Virtualisation</li></ul>`;
        } else {
            statusMines = 0;
            divMines.innerHTML = `<img onclick="change_content(${i})" class="about__box__intended-route__element__button" src="Index/info.png" alt="Infos" style="width:35px"><span></span><img src="Index/mines.png" alt="Cybersecurity"><div class="about__box__intended-route__element__text">Specialised master's degree in Cybersecurity <br>(Bac+5 to Bac+6)</div>`;
        }
    }
}


function updateYearCC() {
    const now = new Date();
    const year = now.getFullYear();

    document.getElementsByClassName("low-footer__year")[0].innerHTML = year;
}


function return_top_animation() {
    if(window.innerWidth > 990) {
        let duration = 1200;
        let animated_bar = document.getElementsByClassName("animated-bar__content")[0];
        animated_bar.style = `display:block;animation: translation ${duration}ms ease-out;`;
        setTimeout(() => {
            animated_bar.style = "display:none";
        }, duration);
    }
}


function shake_up(i) {
    let info_button = document.querySelectorAll(".about__box__intended-route__element__button");
    info_button[i].style = "width: 35px;top: 10px;left: 10px;border-radius: 50%;animation: shake-up 0.8s";
    
    setTimeout(() => {
        info_button[i].style = "width: 35px;top: 10px;left: 10px;border-radius: 50%;";
    }, 800);
}