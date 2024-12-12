const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

    function addTask() {
        if (inputBox.value.trim() === '') {
            alert("You must write something!");
        } else {
            // Create a new list item
            let li = document.createElement("li");
            li.textContent = inputBox.value;
    
            // Create a span element for the "×" button
            let span = document.createElement("span");
            span.innerHTML = "&times;"; // HTML code for "×"
            li.appendChild(span);
    
            // Append the list item to the container
            listContainer.appendChild(li);
    
            // Clear the input field
            inputBox.value = "";
    
            // Save the current list to localStorage
            saveData();
        }
    }
    
    // Add click event listener to the list container
    listContainer.addEventListener("click", function (e) {
        if (e.target.tagName === "LI") {
            // Toggle the checked class
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            // Remove the task if "×" is clicked
            e.target.parentElement.remove();
            saveData();
        }
    });
    
    // Save the current list to localStorage
    function saveData() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }
    
    // Load the saved tasks from localStorage
    function loadTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks") || '';
    }
    
    // Initialize the to-do list on page load
    loadTasks();
