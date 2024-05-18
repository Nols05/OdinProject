import myName from './myName';
import './style.css';
import Calav from './calav.jpg';


function component() {
    const element = document.createElement('div');

    // use your function!
    element.textContent = myName('Cody');
    element.classList.add('hello');
    element.textContent = "HOALA"



    return element;
}

document.body.appendChild(component());
