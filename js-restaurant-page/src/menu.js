import mysteryBoximg from "./mysterybox.jpg";
import chickenimg from "./chicken.jpg"
import friesimg from "./fries.jpg"

function setActive() {
    document.querySelector(".menuBtn").classList.add("active");
}

function initMenu() {
    setActive();
    const contentContainer = document.querySelector(".content");
    
    const menuCardContainer = document.createElement("div");
    menuCardContainer.classList.add("card-container");
    
    const cardChicken = document.createElement("div");
    cardChicken.classList.add("card");
    const chicken_image = document.createElement("img");
    chicken_image.src = chickenimg ; 
    cardChicken.appendChild(chicken_image);
    const chicken_text = document.createElement("div");
    chicken_text.classList.add("card-text");
    chicken_text.innerHTML = `
      <h2> Chicken </h2>
      <p> It's the best ingredients. The spicest spices. All prepared
      with loving care!
      </p>
    `;
    cardChicken.appendChild(chicken_text);

    
    const cardMysteryBox = document.createElement("div");
    cardMysteryBox.classList.add("card");
    const mysterybox_image = document.createElement("img");
    mysterybox_image.src = mysteryBoximg ; 
    cardMysteryBox.appendChild(mysterybox_image);
    const mysterybox_text = document.createElement("div");
    mysterybox_text.classList.add("card-text");
    mysterybox_text.innerHTML = `
      <h2> MysteryBox ! </h2>
      <p> 
      Only for sale for certain person (you know what inside of it lol)
      </p>
    `;
    cardMysteryBox.appendChild(mysterybox_text);


    const cardFried = document.createElement("div");
    cardFried.classList.add("card");
    const fried_image = document.createElement("img");
    fried_image.src = friesimg ; 
    cardFried.appendChild(fried_image);
    const fried_text = document.createElement("div");
    fried_text.classList.add("card-text");
    fried_text.innerHTML = `
      <h2> Curly Fries </h2>
      <p> 
      Curly Fries crispy curly in every bite perfect snack and the side dish
      </p>
    `;
    cardFried.appendChild(fried_text);

    contentContainer.appendChild(cardChicken);
    contentContainer.appendChild(cardMysteryBox);
    contentContainer.appendChild(cardFried);
}
export { initMenu };