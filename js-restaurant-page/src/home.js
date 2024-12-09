import bgimg from "./lospollosbg.jpg";
import logoimg from "./logo.png";

function setActive() {
    document.querySelector(".homeBtn").classList.add("active");
}
function initHome() {
    setActive();
    const contentContainer = document.querySelector(".content");
    
    const image = document.createElement("img");
    image.classList.add("background");
    image.src = bgimg;

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = logoimg;
    
    const heroDiv = document.createElement("div");
    heroDiv.classList.add("hero");
    heroDiv.appendChild(logo);

    const header = document.createElement("h3");
    header.innerHTML = "Welcome to Los Pollos Hermanos";
    heroDiv.appendChild(header);
    
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("detail");
    detailDiv.innerHTML = "We only sell high quality chicken and ...";

    contentContainer.appendChild(image);
    heroDiv.appendChild(detailDiv);
    contentContainer.appendChild(heroDiv);
}
export { initHome } ; 