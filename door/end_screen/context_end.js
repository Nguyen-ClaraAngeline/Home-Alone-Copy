const storyContent = document.getElementById('story-content');
const storyText = document.getElementById('story-text');
const nextBtn = document.getElementById('next-btn');

const storyData = [
    { text: 'The memories return—soft, fleeting.' },
    { text: 'Her brother’s face is clearer now, his smile no longer stings. The guilt lingers, but it loosens its grip.' },
    { text: 'A breeze brushes past, almost like a whisper, almost like forgiveness.' },
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
