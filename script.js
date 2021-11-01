// SELECTORS
const menuBtn = document.getElementById("menu-btn");
const menuBtnImg = document.getElementById("menubtn-img");
const navPanel = document.getElementById("nav-panel");

console.log(menuBtnImg.getAttribute('src'));

// EVENTLISTENER
menuBtn.addEventListener("click", ()=> {
    navPanel.classList.toggle("nav-toggle");
    if(menuBtnImg.getAttribute('src') === "assets/mobile/icon-hamburger.svg") {
        menuBtnImg.setAttribute('src' , "assets/mobile/icon-cross.svg");
    } 
    else {
        menuBtnImg.setAttribute('src', "assets/mobile/icon-hamburger.svg");
    }
})