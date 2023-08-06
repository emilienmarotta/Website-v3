document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});


const currentStatus = "Status";
const currentStatusElement = document.getElementById("current-status");
const currentStatusResult = "Second-year MIASHS student at IDMC in Nancy, France";
const currentStatusResultElement = document.getElementById("current-status-result");
const goal = "Professional goal";
const goalElement = document.getElementById("goal");
const goalResult = "IT Security Engineer";
const goalResultElement = document.getElementById("goal-result");
const githubLink = "GitHub";
const githubLinkElement = document.getElementById("github-link");
const rootmeLink = "RootMe";
const rootmeLinkElement = document.getElementById("rootme-link");
const quote = "\"There are only two types of companies:#Those that have been hacked,#and those that will be.\"##Robert Mueller#FBI Director, 2012";
const quoteElement = document.getElementById("quote");

const prompt2 = document.getElementById("prompt-2");
const prompt3 = document.getElementById("prompt-3");

const typingSpeed = 30; // ms

function typeText(htmlElement, text, charIndex) {
    if (charIndex < text.length) {
        if (text.charAt(charIndex) == "#") {
            htmlElement.innerHTML += "<br>";
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




let prevScrollY = window.scrollY;

function getScrollDirection() {
    const scrollY = window.scrollY;
    const scrollDirection = scrollY > prevScrollY ? 'down' : 'up';
    prevScrollY = scrollY; 
    
    return scrollDirection;
}

let prevScrollDirection = "down";
function changeRocketState() {
    const scrollDirection = getScrollDirection();

    if (prevScrollDirection != scrollDirection) {
        if (scrollDirection == "down") {
            document.getElementById("rocket").src = "Index/rocket-0.png";
        } else {
            document.getElementById("rocket").src = "Index/rocket-1.png";
        }
    }

    prevScrollDirection = scrollDirection;
}

window.addEventListener("scroll", changeRocketState);


function takeOff() {
    document.getElementById("rocket").src = "Index/rocket-1.png";
    setTimeout(() => {
        document.getElementById("rocket").src = "Index/rocket-0.png";
    }, 1000);
}