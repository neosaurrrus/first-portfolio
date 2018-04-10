
let skillY = 0;
let backgroundX = 0;
const meNav = document.querySelector(".meLink");
console.log(meNav);
const projectsNav = document.querySelector(".projectsLink");
const learningNav = document.querySelector(".learningLink");
const body = document.querySelector("body")
const header = document.querySelector(".header");
const me = document.querySelector(".me-parent");
const projects = document.querySelector(".projects-parent");
const origin = document.querySelector(".origin-parent");
const skillsScroll = document.querySelector(".skills-slider");

function colorSwitch(x, background, darkbackground) {
    header.style.setProperty('background-position-x', x + '%');
    body.style.setProperty('--background', background);
    body.style.setProperty('--darkbackground', darkbackground);
};



// Passing parameters via add event listener

meNav.addEventListener("click", function () {
    colorSwitch(0, "rgb(44,130,89)", "rgb(30,79,54)")
    me.style.setProperty('display', 'inline-block');
    projects.style.setProperty('display', 'none;');
    origin.style.setProperty('display', 'none');
    let mePosition= 0;
    let projectsPosition = 100;
    let originPosition = 200;
    me.style.setProperty('left', mePosition +'%')
    projects.style.setProperty('left', projectsPosition +'%')
    origin.style.setProperty('left', originPosition +'%')
    me.style.setProperty('display', 'block');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'none');
});
projectsNav.addEventListener("click", function () {
    colorSwitch(50, "rgb(189,59,4)", "rgb(79,51,30)");
    let mePosition= -100;
    let projectsPosition = 0;
    let originPosition = 100;
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'inline-block');
    origin.style.setProperty('display', 'none');
    me.style.setProperty('left', mePosition +'%')
    projects.style.setProperty('left', projectsPosition +'%')
    origin.style.setProperty('left', originPosition +'%')

console.log(mePosition);
});
learningNav.addEventListener("click", function () {
    colorSwitch(100, "rgb(44,64,180)", "rgb(30,54,79)")
    let mePosition= -200;
    let projectsPosition = -100;
    let originPosition = -0;
    me.style.setProperty('left', mePosition +'%')
    projects.style.setProperty('left', projectsPosition +'%')
    origin.style.setProperty('left', originPosition +'%')
    me.style.setProperty('display', 'none')
    projects.style.setProperty('display', 'none')
    origin.style.setProperty('display', 'block')
});

//slider timer - changes the skills display every 5 seconds.
setInterval(function () {
    skillY -= 250;
    skillsScroll.style.setProperty('background-position-y', skillY + 'px')
}, 5000);

