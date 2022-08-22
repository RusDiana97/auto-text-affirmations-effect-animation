const containerEl = document.querySelector(".container");

const affirmations = ["beautiful", "a good person", "proud of myself", "strong", "invicible", "loved", "perfect", "intelligent", "at peace with myself", "successful", "confident", "powerful", "more than enough", "unique", "special", "doing my best", "positive influence"];

let affirmationIndex = 0;

let characterIndex = 0;

updateAffirmation();

function updateAffirmation() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${affirmations[affirmationIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === affirmations[affirmationIndex].length) {
        affirmationIndex++;
        characterIndex = 0;
    }

    if(affirmationIndex === affirmations.length) {
        affirmationIndex = 0;
    }
    setTimeout(updateAffirmation, 400);
};

