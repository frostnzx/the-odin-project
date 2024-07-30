const container = document.querySelector("#container")

let mode = true , gridSize = 16 ; 

function setGrid(sz) {
    for(let i=0;i<sz;i++){
        const thisLineContainer = document.createElement("div");
        thisLineContainer.setAttribute("class" , "lineContainer");
        for(let j=0;j<sz;j++){
            const div = createNewGrid();
            thisLineContainer.appendChild(div);
        }
        container.appendChild(thisLineContainer);``
    }
}
setGrid(gridSize);

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
function createNewGrid() {
    const div = document.createElement("div");
    div.setAttribute("class", "grid");
    div.addEventListener('mouseover' , (e) => {
        let r,g,b ; 
        if(mode){
            r = randomBetween(0 , 255);
            g = randomBetween(0 , 255);
            b = randomBetween(0 , 255);
        } else {
            r = g = b = 128 ; 
        }
        div.setAttribute("style" , `background-color: rgb(${r},${g},${b})` );
    });
    return div ; 
}

const btnGrid = document.querySelector("#setGrid");
btnGrid.addEventListener('click' , (e) => {
    gridSize = prompt("Enter grid size : ");
    let gridList = document.querySelectorAll(".grid");
    gridList.forEach((element)=> {
        element.remove();
    });
    let gridLineList = document.querySelectorAll(".lineContainer");
    gridLineList.forEach((element) => {
        element.remove();
    });
    setGrid(gridSize);
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener('click' , (e) => {
    let gridList = document.querySelectorAll(".grid");
    gridList.forEach((element)=> {
        element.setAttribute("style" , "background-color: gray;");
    });
});

const btnToggle = document.querySelector("#toggle");
btnToggle.addEventListener('click' , () => {
    mode = !mode ; 
    if(mode) btnToggle.innerHTML = "<b>Erase</b>" ; 
    else btnToggle.innerHTML = "<b>Paint</b>";
});