const buttonWrapper = document.querySelector(".button-wrapper");
const screen = document.querySelector(".screen");
const labels = ['1', '2', '3', '/', '4', '5', '6', 'x', '7', '8', '9', '-', '.', '0', '=', '+']

window.onload = () => {
    crearBotones();
}

let a, b, op;
let textContent = "";

function operate(a, b, op) {
    switch (op) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "x":
            return a * b;
        case "/":
            return a / b;
        default:
            return NaN;
    }
}

function display(x) {
    textContent += x;

    screen.innerText = textContent;
}

function clear() {
    textContent = "";
    screen.innerText = "";
}

function crearBotones() {
    labels.forEach(label => {
        const button = document.createElement("button")
        button.classList.add("button");
        button.textContent = label;
        button.addEventListener("click", () => {
            if (label === '/' || label === 'x' || label === '-' || label === '+') {
                op = label;
                display(label);
            }
            else if (label === "=") {
                clear();
                display(operate(a, b, op));
            }
            else {
                if (a) {
                    b = label;
                }
                else {
                    a = label;
                }
                display(label);
            }
        });
        buttonWrapper.appendChild(button);

    });
}



