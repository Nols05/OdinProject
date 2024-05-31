import './style.css';


export function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = '';


    const hero = document.createElement("div");
    hero.classList.add("hero", "flex");
    const restImg = document.createElement("img");
    restImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKysJvd7y2a_NDsrpSICmvUY9ynb5RI1cQpKMOna6Evg&s";

    const h1 = document.createElement("h1");
    h1.classList.add("h1");
    h1.textContent = "Sobre nuestro restaurante";

    hero.appendChild(h1);
    hero.appendChild(restImg);

    content.appendChild(hero);
}