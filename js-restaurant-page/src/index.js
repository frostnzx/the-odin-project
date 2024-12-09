import "./styles.css"
import { initHome } from "./home.js";
import { initMenu } from "./menu.js";
import { initAbout } from "./about.js";

function cleanPage() {   
    document.querySelector(".content").innerHTML = "";
    document.querySelector("nav .active").classList.remove("active");
}
function init() {
    const contentContainer = document.querySelector(".content");
    const homeBtn = document.querySelector(".homeBtn");
    const menuBtn = document.querySelector(".menuBtn");
    const aboutBtn = document.querySelector(".aboutBtn");

    initHome();
    homeBtn.addEventListener("click" , () => {
        cleanPage();
        initHome();
    })
    menuBtn.addEventListener("click" , () => {
        cleanPage();
        initMenu();
    })
    aboutBtn.addEventListener("click", () => {
        cleanPage();
        initAbout();
    })
}

init();