// Function to add a new item to the grocery list
function addItem() 
{
    // Get the value of the new item from the input field
    const newItem = document.getElementById("new-item").value;

    // Check if the input is not just whitespace
    if (newItem.trim() !== "") 
    {
        // Create a new list item (li) element
        const li = document.createElement("li");
        // Set the text content of the list item to the new item
        li.textContent = newItem;

        // Add a click event listener to toggle the 'purchased' class on the list item
        li.addEventListener("click", function() 
        {
            li.classList.toggle("purchased"); // Toggle the 'purchased' class on click
        });

        // Append the new list item to the grocery list in the document
        document.getElementById("grocery-list").appendChild(li);

        // Clear the input after adding the item
        document.getElementById("new-item").value = "";
    }
}

// Function to show all items
function showAllItems() 
{
    // Select all list items in the grocery list
    const items = document.querySelectorAll("#grocery-list li");
    // Loop through each item and make it visible
    items.forEach(item => {
        item.style.display = "block"; // Make all items visible
    });
}

// Function to show only unpurchased items
function showUnpurchasedItems() 
{
    // Select all list items in the grocery list
    const items = document.querySelectorAll("#grocery-list li");
    // Loop through each item to determine visibility
    items.forEach(item => {
        // Check if the item has the 'purchased' class
        if (item.classList.contains("purchased")) 
        {
            item.style.display = "none"; // Hide purchased items
        } 
        else 
        {
            item.style.display = "block"; // Show unpurchased items
        }
    });
}

// Function to show only purchased items
function showPurchasedItems() 
{
    // Select all list items in the grocery list
    const items = document.querySelectorAll("#grocery-list li");
    // Loop through each item to determine visibility
    items.forEach(item => {
        // Check if the item has the 'purchased' class
        if (item.classList.contains("purchased")) 
        {
            item.style.display = "block"; // Show purchased items
        } 
        else 
        {
            item.style.display = "none"; // Hide unpurchased items
        }
    });
}
