function setActive() {
    document.querySelector(".aboutBtn").classList.add("active");
}

function initAbout() {
    setActive();
    const contentContainer = document.querySelector(".content");

    contentContainer.innerHTML = "Created by : Fnzx";
}

export { initAbout };
