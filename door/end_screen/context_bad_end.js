const storyContent = document.getElementById('story-content');
const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');

const storyData = [
    { text: 'The whispers grow louder. She remembers it all—the silence, his cries, the empty house.' },
    { text: 'His voice follows her, pulling her back.' },
    { text: 'The day he died loops endlessly, the dark closing in.' },
];

let currentPage = 0;

storyText.classList.remove('hidden');  // Ensure that the story text is visible at first
storyContent.textContent = storyData[currentPage].text;

nextBtn.addEventListener('click', () => {
    storyText.classList.add('hidden');
    setTimeout(() => {
        currentPage++;
        if (currentPage < storyData.length) {
            storyContent.textContent = storyData[currentPage].text;
            storyText.classList.remove('hidden');
        } else {
            nextBtn.textContent = 'Start Game';
            nextBtn.addEventListener('click', () => {
                window.location.href = '../../door/credits/credits.html';
            });
        }
    }, 1000);
});
