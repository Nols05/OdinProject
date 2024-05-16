
const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let s = `${title} by ${author}, ${pages} pages, `
        if (read) {
            s += "This book has been read."
        }
        else {
            s += "Not read yet."
        }

        return s;
    }
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary("El señor de los anilos");
addBookToLibrary("Padre rico padre pobre");
addBookToLibrary("Asesinato en el orient express")

function printLibrary() {
    let s = "";
    for (let i = 0; i < myLibrary.length; i++) {
        s += myLibrary[i] + "\n";
    }

    console.log(s);
    return s;
}



function algo() {

    let libro = prompt("Introduce un libro: ")
    myLibrary.push(libro);
    actualizarLibreria();

}

let container = document.querySelector(".container");
let p = document.createElement("p");

function actualizarLibreria() {
    p.textContent = printLibrary();
    container.appendChild(p);
}




actualizarLibreria()

let theHobbit = new Book("The Hobbit", "Tolkien", 295, false);

console.log(theHobbit.info());
