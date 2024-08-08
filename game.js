const gameStages = [
    {
        text: "Once upon a time some cats had a cat game, go ahead and play if you dare...",
        choices: ["Orange cat", "Black cat"],
        consequences: ["orange", "black"],
        image: "defaultcat.jpg"
    },
    {
        text: "You have chosen the Orange Cat. What would you like to do?",
        choices: ["Scratch", "Purr"],
        consequences: ["orangeScratch", "orangePurr"]
    },
    {
        text: "You have chosen the Black Cat. What would you like to do?",
        choices: ["Scratch", "Purr"],
        consequences: ["blackScratch", "blackPurr"]
    },
    {
        text: "You have been scratched back by a kitty.",
        choices: ["End Game"],
        consequences: ["end"]
    },
    {
        text: "You have been befriended by a kitty.",
        choices: ["End Game"],
        consequences: ["end"]
    },
    {
        text: "End Game",
        choices: [],
        consequences: []
    }
];
let currentStage = 0;
function startGame() {
    currentStage = 0;
    updatePage();
}
function updatePage() {
    const storySection = document.getElementById('story');
    const imageSection = document.getElementById('image');
    const choicesSection = document.getElementById('choices');
    const stage = gameStages[currentStage];
    storySection.innerHTML = `<h2>${stage.text}</h2>`;
    if (stage.choices && stage.choices.length > 0) {
        choicesSection.innerHTML = stage.choices.map((choice, index) => {
            return `<button onclick="makeChoice(${index})">${choice}</button>`;
        }).join('');
    } else {
        choicesSection.innerHTML = '';
    }
    if (stage.image) {
        imageSection.innerHTML = `<img src="${stage.image}" alt="Cat">`;
    } else {
        imageSection.innerHTML = '';
    }
}
function makeChoice(index) {
    const stage = gameStages[currentStage];
    const consequence = stage.consequences[index];
    switch (consequence) {
        case 'orange':
        case 'black':
            currentStage++;
            break;
        case 'orangeScratch':
        case 'orangePurr':
        case 'blackScratch':
        case 'blackPurr':
            currentStage++;
            break;
        case 'end':
            currentStage = gameStages.length - 1;
            break;
        default:
            break;
    }
    if (currentStage < gameStages.length) {
        updatePage();
    } else {
        endGame();
    }
}
function endGame() {
    const storySection = document.getElementById('story');
    const imageSection = document.getElementById('image');
    const choicesSection = document.getElementById('choices');

    storySection.innerHTML = '<h2>Game Over</h2><p>Thanks for playing the Cat Game!</p>';
    imageSection.innerHTML = '';
    choicesSection.innerHTML = '';
}
