// Création de la barre d'inventaire
document.addEventListener("DOMContentLoaded", () => {
    const inventoryBar = document.createElement('div');
    inventoryBar.classList.add('inventory-bar');

    for (let i = 0; i < 10; i++) {
        const inventoryItem = document.createElement('div');
        inventoryItem.classList.add('inventory-item', 'empty');
        inventoryBar.appendChild(inventoryItem);
    }

    document.body.appendChild(inventoryBar);

    loadInventory();
});

async function loadInventory() {
    try {
        const response = await fetch('../../inventory/inventory.json'); 
        const items = await response.json();
        populateInventory(items);
    } catch (error) {
        console.error('Erreur lors du chargement de l\'inventaire :', error);
    }
}

function populateInventory(items) {
    const inventorySlots = document.querySelectorAll('.inventory-item');
    items.slice(0, 10).forEach((item, index) => {
        const slot = inventorySlots[index];
        slot.classList.remove('empty');
        
        const img = document.createElement('img');
        img.src = item.image; 
        img.alt = item.name;
        img.id = `inventory-item-${item.id}`;
        img.draggable = true;
        img.addEventListener('dragstart', handleDragStart);
        
        slot.appendChild(img);
    });
}

function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}
