const namesTextarea = document.getElementById('names');
const drawButton = document.getElementById('draw');
const resetButton = document.getElementById('reset');
const winnerDiv = document.getElementById('winner');

let originalNames = [];
let names = [];

namesTextarea.addEventListener('input', () => {
    originalNames = namesTextarea.value.split('\n').filter(name => name.trim() !== '');
    names = [...originalNames];
});

drawButton.addEventListener('click', () => {
    if (names.length === 0) {
        winnerDiv.textContent = 'No names to draw from!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];

    winnerDiv.textContent = `Winner: ${winner}`;

    names.splice(randomIndex, 1);
    namesTextarea.value = names.join('\n');
});

resetButton.addEventListener('click', () => {
    names = [...originalNames];
    namesTextarea.value = originalNames.join('\n');
    winnerDiv.textContent = '';
});
