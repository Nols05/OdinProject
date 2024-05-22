import './style.css';


export function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = '';

    const hero = document.createElement("div");
    hero.classList.add("hero", "flex");
    const restImg = document.createElement("img");
    restImg.src = "https://cdn-icons-png.flaticon.com/256/1046/1046747.png";

    const h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = "Lee el menu";

    hero.appendChild(h1);
    hero.appendChild(restImg);

    content.appendChild(hero);
}