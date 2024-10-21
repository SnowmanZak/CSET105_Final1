// Function to add a new item to the grocery list
function addItem() 
{
    // Get the value from the input field
    const newItem = document.getElementById("new-item").value;

    // Check if the input is not empty
    if (newItem.trim() !== "") 
    {
        // Create a new list item element
        const li = document.createElement("li");

        // Set the text of the list item to the new item
        li.textContent = newItem;

        // Add an event listener to toggle purchased state
        li.addEventListener("click", function() {
        // Toggle the 'purchased' class on click
        li.classList.toggle("purchased");
        });

        // Append the new list item to the grocery list
        document.getElementById("grocery-list").appendChild(li);

        // Clear the input field for the next item
        document.getElementById("new-item").value = "";
    }
}
