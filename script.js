const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes"); // Corrected "hetItem" to "getItem"
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML); // Corrected comma to dot
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") { // Changed "===" to "===" for comparison
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => { // Removed unnecessary ")"
            nt.onkeyup = function() { // Corrected function definition
                updateStorage();
            };
        });
    }
});

document.addEventListener("keydown", event => { // Removed extra ")"
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
