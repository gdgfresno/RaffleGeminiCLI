const namesTextarea = document.getElementById('names');
const pickButton = document.getElementById('pick');
const resetButton = document.getElementById('reset');
const winnerDiv = document.getElementById('winner');

let originalNames = [];
let names = [];

const pickWinner = () => {
    if (names.length === 0) {
        winnerDiv.textContent = 'No names left!';
        return;
    }

    const randomIndex = Math.floor(Math.random() * names.length);
    const winner = names[randomIndex];

    winnerDiv.textContent = `Winner: ${winner}`;

    names.splice(randomIndex, 1);
    namesTextarea.value = names.join('\n');
};

const reset = () => {
    names = [...originalNames];
    namesTextarea.value = names.join('\n');
    winnerDiv.textContent = '';
};

namesTextarea.addEventListener('input', () => {
    originalNames = namesTextarea.value.split('\n').filter(name => name.trim() !== '');
    names = [...originalNames];
});

pickButton.addEventListener('click', pickWinner);
resetButton.addEventListener('click', reset);

