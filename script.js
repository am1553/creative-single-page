// SELECTORS
const menuBtn = document.getElementById("menu-btn");
const menuBtnImg = document.getElementById("menubtn-img");
const navPanel = document.getElementById("nav-panel");
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");


// MENU
menuBtn.addEventListener("click", ()=> {
    navPanel.classList.toggle("nav-toggle");
    if(menuBtnImg.getAttribute('src') === "assets/mobile/icon-hamburger.svg") {
        menuBtnImg.setAttribute('src' , "assets/mobile/icon-cross.svg");
    } 
    else {
        menuBtnImg.setAttribute('src', "assets/mobile/icon-hamburger.svg");
    }
})


// PROJECT CAROUSEL

let counter = 1;
showSlides(counter);

// next prev controls
function plusSlide(n) {
    showSlides(counter += n);
}

function showSlides(n) {
    var i;
    var project = document.getElementsByClassName("project");

    if(n > project.length) {
        counter = 1;
    }
    if(n < 1) {
        counter = project.length;
    }

    for(i = 0; i < project.length; i++) {
        project[i].style.display = "none";
    }

    project[counter - 1].style.display = "block";
}