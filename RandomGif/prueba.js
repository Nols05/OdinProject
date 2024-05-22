
let img = document.querySelector("#img");
let form = document.querySelector("#form");
let input = document.querySelector("#search");



// Define the fetchGif function
function fetchGif(query) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=fVfkfDd2Othw9SbLxacG0oPTjoKi6NIH&s=${query}`, { mode: 'cors' })
        .then(response => response.json())
        .then(response => img.src = response.data.images.original.url)
        .catch(error => img.src = "https://coachingsanitario.com/wp-content/uploads/2019/06/ERROR.jpg");
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value;
    if (query) {
        fetchGif(query);

    }
});
