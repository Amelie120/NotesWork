//making variables
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

//checking if there is any notes in the local storage and if there is we will show them
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

//making a function to store our notes so when we leave our page it´s still there and update 
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

//when click on button we execute ...
createBtn.addEventListener('click', () => {

    //creating a p element and storing it as inputBox
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    //adding a classname called input-box to the p element
    inputBox.className = "input-box";

    //dding inputBox set attribute to contenteditable and true
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";

    //this input will be displayed inside this notesContainer
    notesContainer.appendChild(inputBox).appendChild(img);

    //adding a focus to the inputBox
    imputBpx.focus();

    //updating the storage after we add a new note
    updateStorage();
});


//adding a delete functionality to our bin icon
notesContainer.addEventListener('click', function (e) {

    //if the target element is ing then we will remove the element
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }

    //will update the storage when we start typing
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(notes => {
            notes.onkeyup = function () {
                updateStorage();
            }
        })

        //will add a line and prevent the default feature of the enter key
        document.addEventListener("keydown", event => {
            if (event.key == "Enter") {
                document.execCommand("insertLineBreak");
                event.preventDefault();
            }
        })
    }
});