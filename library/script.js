const myLibrary = [];
let bookID = 0 ; 

const addBooksButton = document.querySelector(".button-addNewBooks");
const modal = document.querySelector("[data-modal]");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");

function Book(title , author , pages , readed , id) {
    this.title = title ;
    this.author = author ; 
    this.pages = pages ; 
    this.readed = readed ; 
    this.id = id ; 
};

function addBookToLibrary() {
    // Retrive datas from html
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const numberOfPages = document.querySelector("#numOfPages");
    const readStatus = document.querySelector('input[name="readornot"]:checked')?.value;
    let readed ; 
    if(readStatus == "read") {
        readed = true ; 
    } else if(readStatus == "not-read") {
        readed = false ; 
    }

    // Push new data
    const book = new Book(title.value , author.value , numberOfPages.value , readed , bookID);
    myLibrary.push(book);
    bookID++;
    // Reset
    title.value = "" ; 
    author.value = "" ; 
    numberOfPages.value = "" ; 
    const readRadio = document.querySelector("#read");
    const notReadRadio = document.querySelector("#not-read");
    readRadio.checked = false ; 
    notReadRadio.checked = false ; 
}

function removeBook(id) {
    const removeIndex = myLibrary.findIndex((e) => e.id == id);
    myLibrary.splice(removeIndex , 1);
    displayBooks();
}

function changeBookStatus(id) {
    const changeStatusElement= myLibrary.find((e) => e.id == id);
    changeStatusElement.readed = !changeStatusElement.readed ; 
    displayBooks();
}

function displayBooks() {
    const contentContainer = document.querySelector(".content-container");
    contentContainer.innerHTML = "" ; 
    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card-container");
        const statusText = book.readed ? "Read" : "Not Read" ; 
        card.innerHTML = `
        <div class="book-card-header">${book.title}</div>
        <div class="book-card-content">
            Author: ${book.author} <br>
            Number Of Pages: ${book.pages} <br>
            Read Status: ${statusText}
        </div>
        <div class="book-card-footer">
            <button class="button-remove-book" value="${book.id}">Remove Book</button>
            <button class="button-change-status" value="${book.id}">Change Reading Status</button>
        </div>
        `;
        contentContainer.appendChild(card);
    });

    document.querySelectorAll(".button-remove-book").forEach((b) => {
        b.addEventListener("click" , () => {
            removeBook(Number(b.value));
        });
    });
    document.querySelectorAll(".button-change-status").forEach((b) => {
        b.addEventListener("click" , () => {
            changeBookStatus(Number(b.value));
        });
    });
};

addBooksButton.addEventListener("click" , (e) => {
    modal.showModal();
});
submitButton.addEventListener("click" , (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    modal.close();
});
closeButton.addEventListener("click" , () => {
    modal.close();
});



