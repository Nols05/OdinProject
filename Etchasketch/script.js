const container = document.querySelector(".container");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () => {
    let n = prompt("Número: ");
    grid(n);
})

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) { return; }
    e.target.style.backgroundColor = "red";
}

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

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
        div.addEventListener("mouseover", changeColor)
        div.addEventListener("mousedown", changeColor)
        container.appendChild(div);
    }
}


