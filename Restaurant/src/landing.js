import './style.css';


export function loadLanding() {
    const content = document.querySelector("#content");
    content.innerHTML = '';


    const hero = document.createElement("div");
    hero.classList.add("hero", "flex");
    const restImg = document.createElement("img");
    restImg.src = "https://i.pinimg.com/originals/77/7d/9c/777d9c6e187bfc29677c7de89aa73c5a.jpg";

    const h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = "Mi mega restaurante";

    hero.appendChild(h1);
    hero.appendChild(restImg);

    content.appendChild(hero);
}