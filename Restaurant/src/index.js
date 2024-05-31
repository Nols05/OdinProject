import { loadLanding } from './landing.js';
import { loadAbout } from './about.js';
import { loadMenu } from './menu.js';


document.addEventListener("DOMContentLoaded", loadLanding)

document.querySelector(".home").addEventListener("click", loadLanding);
document.querySelector(".about").addEventListener("click", loadAbout);
document.querySelector(".menu").addEventListener("click", loadMenu);



