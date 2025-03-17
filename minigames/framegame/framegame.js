let pieceCount = 0;
const placedPieces = new Set();

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('dropZone');
    const closeButton = document.querySelector('.closebuttongame');

 
    const messagePopup = document.createElement('div');
    messagePopup.id = 'message-popup';
    messagePopup.classList.add('popup', 'hidden');
    messagePopup.innerHTML = `<p>That should be right</p><button onclick="closeMessagePopup()">Close</button>`;
    document.body.appendChild(messagePopup);

    dropZone.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    dropZone.addEventListener('drop', (event) => {
        event.preventDefault();
        const imageId = event.dataTransfer.getData('text/plain');
        
        if (placedPieces.has(imageId)) {
            document.getElementById('message-popup').classList.remove('hidden');
            return;
        }
        
        const image = document.getElementById(imageId);
        if (image) {
            const clonedImage = image.cloneNode(true);
            clonedImage.classList.add('dropped-piece');

            const predefinedPositions = [
                { left: '50px', top: '50px' },
                { left: '150px', top: '50px' },
                { left: '250px', top: '50px' },
            ];

            const positionIndex = parseInt(imageId) - 1;
            if (predefinedPositions[positionIndex]) {
                clonedImage.style.left = predefinedPositions[positionIndex].left;
                clonedImage.style.top = predefinedPositions[positionIndex].top;
            } else {
                clonedImage.style.left = '51%';
                clonedImage.style.top = '56%';
                clonedImage.style.transform = 'translate(-50%, -50%)';
            }

            dropZone.appendChild(clonedImage);
            placedPieces.add(imageId);
            pieceCount++;
            completed();
        }
    });
});

function closeMessagePopup() {
    document.getElementById('message-popup').classList.add('hidden');
}

document.getElementById('door-container').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('exit-popup').classList.remove('hidden');
});

function togglePopup() { 
    const popup = document.getElementById('exit-popup');
    popup.classList.toggle('hidden');
}

function proceedToExit() {
    window.location.href='../wordgame/wordgame.html';
}

function closePopup() {
    window.location.href='../../hallway/hallway.html';
}

function completed() {
    const closeButton = document.querySelector('.closebuttongame');
    if (pieceCount === 6) {
        closeButton.setAttribute('onclick', 'togglePopup()');
    } else {
        closeButton.setAttribute('onclick', "window.location.href='../../hallway/hallway.html'");
    }
}
