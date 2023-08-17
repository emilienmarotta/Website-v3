document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


const currentStatus = "Status";
const currentStatusElement = document.getElementById("current-status");
const currentStatusResult = "Second-year MIASHS student at IDMC in Nancy, France";
const currentStatusResultElement = document.getElementById("current-status-result");
const goal = "Professional goal";
const goalElement = document.getElementById("goal");
const goalResult = "Business Intelligence";
const goalResultElement = document.getElementById("goal-result");
const githubLink = "GitHub";
const githubLinkElement = document.getElementById("github-link");
const rootmeLink = "RootMe";
const rootmeLinkElement = document.getElementById("rootme-link");
const quote = "\"You can have $ without information,#but you cannot have information without $.\"##Daniel Keys Moran";
const quoteElement = document.getElementById("quote");

const prompt2 = document.getElementById("prompt-2");
const prompt3 = document.getElementById("prompt-3");

const typingSpeed = 30; // ms

function typeText(htmlElement, text, charIndex) {
    if (charIndex < text.length) {
        if (text.charAt(charIndex) == "#") {
            htmlElement.innerHTML += "<br>";
        } else if (text.charAt(charIndex) == "$") {
            htmlElement.innerHTML += "<span class='green-word'>data</span>";
        } else {
            htmlElement.classList.add("cursor-blink");
            htmlElement.innerHTML += text.charAt(charIndex);
        }
        charIndex ++;

        setTimeout(() => typeText(htmlElement, text, charIndex), typingSpeed);
    } else {
        setTimeout(() => htmlElement.classList.remove("cursor-blink"), 0);
    }
}

window.onload = () => {
    typeText(currentStatusElement, currentStatus, 0);
    typeText(quoteElement, quote, 0);
    setTimeout(() => {currentStatusResultElement.innerHTML = currentStatusResult; prompt2.style.display = "inline-block";}, currentStatus.length * typingSpeed + 300);
    setTimeout(() => typeText(goalElement, goal, 0), currentStatus.length + typingSpeed + 800);
    setTimeout(() => {goalResultElement.innerHTML = goalResult; prompt3.style.display = "inline-block";}, (currentStatus.length + goal.length) * typingSpeed + 1100);
    setTimeout(() => {typeText(githubLinkElement, githubLink, 0); typeText(rootmeLinkElement, rootmeLink, 0)}, 200);
};


function arrowMouseOver() {
    document.getElementById("arrow").src = "Index/arrow2.png";
}

function arrowMouseOut() {
    document.getElementById("arrow").src = "Index/arrow.png";
}


const scrollToTopButton = document.getElementById("up-button");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



function linkedinMouseOver() {
    document.getElementById("linkedin").src = "Index/linkedin-2.png";
}

function linkedinMouseOut() {
    document.getElementById("linkedin").src = "Index/linkedin.png";
}

function instagramMouseOver() {
    document.getElementById("instagram").src = "Index/instagram-2.png";
}

function instagramMouseOut() {
    document.getElementById("instagram").src = "Index/instagram.png";
}


const cursor = document.querySelector("#cursor");
const sidebar = document.querySelector("#sidebar");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const contentHeight = document.body.scrollHeight;
  const sidebarHeight = sidebar.clientHeight;
  const maxCursorTop = sidebarHeight - cursor.clientHeight;

  const cursorTop = (scrollTop / (contentHeight - viewportHeight)) * maxCursorTop;

  cursor.style.top = `${cursorTop}px`;
});