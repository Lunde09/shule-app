// STEP 1: Wait for the webpage structure to fully load
document.addEventListener("DOMContentLoaded", function () {

    // STEP 2: Target the HTML elements using their exact IDs
    const formElement = document.getElementById("The application form");
    const studentNameInput = document.getElementById("student name");
    const indexNumberInput = document.getElementById("your index number ");
    const studentListElement = document.getElementById("list of the students");
    const feedbackMessage = document.getElementById("message");

    // STEP 3: Listen for the form "submit" event (when the register button is clicked)
    formElement.addEventListener("submit", function (event) {
        
        // Prevent the browser from refreshing the page or jumping to success.html
        event.preventDefault();

        // STEP 4: Extract the exact values typed into the input boxes
        const nameValue = studentNameInput.value.trim();
        const indexValue = indexNumberInput.value.trim();

        // Safety Check: If fields are accidentally empty, stop running the code
        if (nameValue === "" || indexValue === "") {
            return; 
        }

        // STEP 5: Create a new list item (<li>) element out of thin air
        const newListItem = document.createElement("li");
        
        // Set the text inside the new list item to display the student details
        newListItem.innerHTML = `<span><strong>${nameValue}</strong> (Index: ${indexValue})</span>`;
        newListItem.style.marginBottom = "10px";

        // STEP 6: Create a "Remove" button element for this specific student
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Remove";
        deleteButton.style.marginLeft = "15px";
        deleteButton.style.cursor = "pointer";

        // Tell the button to delete this specific list item when clicked
        deleteButton.addEventListener("click", function () {
            newListItem.remove();
            feedbackMessage.textContent = "Student removed from list.";
            feedbackMessage.style.color = "red";
        });

        // STEP 7: Put everything onto the actual webpage screen
        newListItem.appendChild(deleteButton);       // Glue the button inside the list item
        studentListElement.appendChild(newListItem); // Glue the list item inside the main <ol> list

        // Step 8: Clean up the UI (Show success message and empty out the text inputs)
        feedbackMessage.textContent = "Student registered successfully!";
        feedbackMessage.style.color = "green";
        formElement.reset(); 
    });
});
