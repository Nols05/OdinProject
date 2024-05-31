let container = document.querySelector(".container");
let icon = document.querySelector("#icon");
let text = document.querySelector("#text");
let form = document.querySelector("#form");


async function fetchGif(query) {
    try {
        const gifPromise = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fVfkfDd2Othw9SbLxacG0oPTjoKi6NIH&s=${query}`, { mode: 'cors' })
        const gif = await gifPromise.json();
        return gif.data.images.original.url;
    }
    catch (error) {
        return "https://coachingsanitario.com/wp-content/uploads/2019/06/ERROR.jpg";
    }
}

async function getWeather(location) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a85f8277dee44b35b54203314242205&q=${location}`, { mode: 'cors' });
        const data = await response.json();
        return data.current.condition.text;
    }
    catch (error) {
        return "Error: Location not found";
    }
}

async function displayWeather(location) {
    const weather = await getWeather(location);
    const gif = await fetchGif(weather);

    icon.src = gif;
    text.textContent = weather;
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value;
    if (query) {
        displayWeather(query);
    }
});









