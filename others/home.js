const allPath = document.querySelectorAll(".logo__content path");
const pathsParent = document.querySelector(".logo__content");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector("#menu");
const allMenuLinks = document.querySelectorAll(".nav-links__items");
// const body = document.querySelector(body);
let menuBtnPressed = false;

//events listeners 
btnMenu.addEventListener("click", showMenu);

// functions
function showMenu() {
  btnMenu.classList.toggle("btn-menu-opened");
  menu.classList.toggle("open-menu");
  allMenuLinks.forEach(eachLink => {
    eachLink.classList.toggle("fade-in")
  });
  
  if(!menuBtnPressed){//if pressed for the first time
    btnMenu.setAttribute("aria-expanded", "true");
    menuBtnPressed = true;
  }else {
    btnMenu.setAttribute("aria-expanded", "false");
    menuBtnPressed = false;
  }
}


let animDelay = 0;
let animDuration = 4;
// svg anime function
allPath.forEach(function (eachPath, itsIndex) {
  eachPathLength = Math.floor(eachPath.getTotalLength());
  eachPathLength = eachPathLength.toString();

  eachPath.style.strokeDasharray = `${eachPathLength}px`;
  eachPath.style.strokeDashoffset = `${eachPathLength}px`;
  eachPath.style.animationDuration = `${animDuration}s`;
  eachPath.style.animationDelay = `${animDelay}s`;
  animDelay += 0.15;
  animDuration -= 0.2;// this is to make the animation speed up towards the end
});

//the animDelay here will be the finam value from the forEach loop
pathsParent.style.animationDelay = `${animDelay}s`;