
let skillY = 0;
let backgroundX = 0;
const meNav = document.querySelector(".meLink");
console.log(meNav);
const projectsNav = document.querySelector(".projectsLink");
const originNav = document.querySelector(".originLink");
const body = document.querySelector("body")
const header = document.querySelector(".header");
const hero1 = document.querySelector(".hero1");
const hero2 = document.querySelector(".hero2");
const hero3 = document.querySelector(".hero3");
const me = document.querySelector(".me-parent");
const projects = document.querySelector(".projects-parent");
const origin = document.querySelector(".origin-parent");
const skillsScroll = document.querySelector(".skills-slider");

function colorSwitch(x, background, darkbackground, highlight) {
    header.style.setProperty('background-position-x', x + '%');
    body.style.setProperty('--background', background);
    body.style.setProperty('--darkbackground', darkbackground);
    body.style.setProperty('--highlight', highlight);
};
function backgroundSwitch(oneLeft, twoLeft, threeLeft){
    hero1.style.setProperty('left', oneLeft);
    hero2.style.setProperty('left', twoLeft);   
    hero3.style.setProperty('left',  threeLeft);
}


// Passing parameters via add event listener

meNav.addEventListener("click", function () {
    colorSwitch(0, "rgb(44,130,89)", "rgb(30,79,54)", "rgb(255, 240, 100")
    backgroundSwitch("0%", "100%", "200%");
    me.style.setProperty('display', 'block');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'none');
});
projectsNav.addEventListener("click", function () {
    colorSwitch(50, "rgb(189,59,4)", "rgb(79,51,30)", "rgb(255, 240, 60");
    backgroundSwitch("-100%", "0%", "100%");
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'block');
    origin.style.setProperty('display', 'none');
});
originNav.addEventListener("click", function () {
    colorSwitch(100, "rgb(0,53,133)", "rgb(0,30,50)", "rgb(255,240,30)")
    backgroundSwitch("-200%", "-100%", "-10%");
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'block');
});

//slider timer - changes the skills display every 5 seconds.
setInterval(function () {
    skillY -= 250;
    skillsScroll.style.setProperty('background-position-y', skillY + 'px')
}, 5000);

