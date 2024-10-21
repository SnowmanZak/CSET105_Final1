let groceryList = [];

function addItem() {
    const itemText = document.getElementById('new-item').value;
    if (itemText === '') {
        alert('Please enter an item name.');
        return;
    }
    groceryList.push({ name: itemText, purchased: false });
    document.getElementById('new-item').value = '';
    renderList();
}

function toggleItem(index) {
    groceryList[index].purchased = !groceryList[index].purchased;
    renderList();
}