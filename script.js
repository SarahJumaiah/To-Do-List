const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') { // Check if the input box is empty
        alert("You must write something!"); 
    } else {
        let li = document.createElement("li"); // Create a new list item (li) element
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Append the new list item to the list container
        let span = document.createElement("span"); // Create a new span element
        span.innerHTML = "\u00D7"; // Set inner HTML to '×' symbol (used for delete)
        li.appendChild(span); // Append the span (delete button) to the list item
    }
    inputBox.value = ""; // Clear the input box after adding the task
    saveData(); // Save the current list to localStorage
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { // Check if a list item (li) was clicked
        e.target.classList.toggle("checked"); // Toggle the 'checked' class for the list item
        saveData(); // Save the current list to localStorage
    } else if (e.target.tagName === "SPAN") { // Check if a span (delete button) was clicked
        e.target.parentElement.remove(); // Remove the parent list item of the span (the task)
        saveData(); // Save the current list to localStorage
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save the inner HTML of the list container to localStorage with the key 'data'
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Set the inner HTML of the list container to the value stored in localStorage with the key 'data'
}

showTask(); // Call the showTask function to display any saved tasks when the page loads