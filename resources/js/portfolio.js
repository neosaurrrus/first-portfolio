
let skillY = 0;
let backgroundX = 0;
const projectArray = [];
const originArray = []
const meNav = document.querySelector(".meLink");
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
const title = document.querySelector(".title")

function colorSwitch(x, background, darkbackground, highlight) {
    header.style.setProperty('background-position-x', x + '%');
    body.style.setProperty('--background', background);
    body.style.setProperty('--darkbackground', darkbackground);
    body.style.setProperty('--highlight', highlight);
    document.documentElement.scrollTop = 0; 
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
    title.innerHTML = "web_designer";
    me.style.setProperty('display', 'block');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'none');
});
projectsNav.addEventListener("click", function () {
    colorSwitch(50, "rgb(189,59,4)", "rgb(79,51,30)", "rgb(255, 240, 60");
    backgroundSwitch("-100%", "0%", "100%");
    title.innerHTML = "web_developer";
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'block');
    origin.style.setProperty('display', 'none');
    
});
originNav.addEventListener("click", function () {
    colorSwitch(100, "rgb(0,53,133)", "rgb(0,30,50)", "rgb(255,240,30)")
    backgroundSwitch("-200%", "-100%", "0%");
    title.innerHTML = "web_student";
    me.style.setProperty('display', 'none');
    projects.style.setProperty('display', 'none');
    origin.style.setProperty('display', 'block');
});

//slider timer - changes the skills display every 5 seconds.
setInterval(function () {
    skillY -= 250;
    skillsScroll.style.setProperty('background-position-y', skillY + 'px')
}, 5000);

function Project(title, text, sidePic){
    this.title = title,
    this.text = text,
    this.sidePic = sidePic
}
function Origin(title, text, sidePic) {
    this.title = title,
    this.text = text,
    this.sidePic = sidePic;
}
function projectBuild(){
    projectArray.push(new Project("Some of my finish projects" , "This is text", "../images/js.png"))
    projectArray.push(new Project("Kangdemic" , "A clone of a popular board game. This is the project I started as I started to learn web development. It is here purely as a sign not to give up! Purely front-end, it uses HTML, CSS and JS and a library called dragScroll.JS", "../images/js.png"))
    projectArray.push(new Project("Hikr" , "A web application that shows good walking locations in the UK", "../images/js.png"))
    projectArray.push(new Project("To be announced!" , "A project that has yet to be disclosed... or possibly made", "../images/js.png"))
};

function originBuild() {
    originArray.push(new Origin("This is an Origin", "This is text", "../images/js.png"))
    originArray.push(new Origin("This is an Origin", "This is text", "../images/js.png"))
    originArray.push(new Origin("This is an Origin", "This is text", "../images/js.png"))
};

projectBuild();
originBuild();
origin.innerHTML = '';
projects.innerHTML='';
let textOnLeft = true;
let projectHTML = [];
let originHTML = [];
projectArray.forEach(section => {
    projectHTML.push(addContent(section.title, section.text, section.sidePic, textOnLeft))
    textOnLeft = !textOnLeft;
});
projects.innerHTML = projectHTML.join('');
console.log(projects.innerHTML);    
textOnLeft = false;
originArray.forEach(section =>{
    originHTML.push(addContent(section.title, section.text, section.sidePic, textOnLeft))
    origin.innerHTML = originHTML.join('');
    textOnLeft=!textOnLeft;
});


function addContent(title, text, sidepic, isLeft){
    if(isLeft === true){
        return `<div class="section">
            <div class="leftbox textbox">
                <h3>${title}</h3>
                <p> ${text}</p>
            </div>
            <div class="sidebox"><img class="sidepic" src="resources/images/me.jpg"></div>
        </div>
        `
    }
    else return `<div class="section">
            <div class="sidebox"><img class="sidepic" src="resources/images/me.jpg"></div>
            <div class="rightbox textbox">
               <h3>${title}</h3>
                <p> ${text}</p>
            </div>
            </div>`
}



   



