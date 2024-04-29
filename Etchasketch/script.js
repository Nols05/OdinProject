const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    let n = prompt("Número: ");
    grid(n);
})



function grid(n) {
    if (n > 100) {
        alert("Máximo 100");
        return;
    }

    container.innerHTML = '';

    for (let i = 0; i < n * n; i++) {
        const div = document.createElement("div");
        div.className = "square";
        div.style.width = `${100 / n}%`
        div.style.height = `${100 / n}%`

        container.appendChild(div);
    }
}


