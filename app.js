const cards = [
    {
        name: "6",
        cardValue: 6,
        cardImage: "img/cards-6.svg"
    },
    {
        name: "7",
        cardValue: 7,
        cardImage: "img/cards-7.svg"
    },
    {
        name: "8",
        cardValue: 8,
        cardImage: "img/cards-8.svg"
    },
    {
        name: "9",
        cardValue: 9,
        cardImage: "img/cards-9.svg"
    },
    {
        name: "10",
        cardValue: 10,
        cardImage: "img/cards-10.svg"
    },
    {
        name: "Jack",
        cardValue: 11,
        cardImage: "img/cards-jack.svg"
    },
    {
        name: "Queen",
        cardValue: 12,
        cardImage: "img/cards-queen.svg"
    },
    {
        name: "King",
        cardValue: 13,
        cardImage: "img/cards-king.svg"
    },
    {
        name: "Ace",
        cardValue: 14,
        cardImage: "img/cards-ace.svg"
    },
    {
        name: "Joker",
        cardValue: 15,
        cardImage: "img/cards-joker.svg"
    },
];


function shuffle(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
};


const buttonElementMore = document.getElementById("more");
const buttonElementLess = document.getElementById("less");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");
const cardsList = document.getElementById("cards-list");

let score = 0;
let index = 0;
const shuffledCards = shuffle([...cards]);



function drawCard(card) {
    const imgElement = document.createElement("img");
    imgElement.src = card["cardImage"];

    const cardElement = document.createElement("li")
    cardElement.classList.add("card")
    cardElement.append(imgElement)
    cardsList.append(cardElement)
}


function checkAnswer(event) {
    if (index > 8) {
        messageElement.innerText = "GAME OVER!"
        buttonElementMore.removeEventListener("click", checkAnswer)
        buttonElementLess.removeEventListener("click", checkAnswer)
        return;
    }

    const userChoice = event.currentTarget.id;
    const currentCard = shuffledCards[index].cardValue;
    const nextCard = shuffledCards[index + 1].cardValue;

    if (
        (nextCard < currentCard && userChoice === "less") ||
        (nextCard > currentCard && userChoice === "more")
    ) {
        score += 20;
        messageElement.innerText = "Well done! +20 points";
    } else {
        score -= 15;
        messageElement.innerText = "Wrong! -15 points";
    }

    scoreElement.innerText = `Score: ${score}`;
    index++;
    drawCard(shuffledCards[index]);

}


drawCard(shuffledCards[index]);


buttonElementLess.addEventListener("click", checkAnswer);
buttonElementMore.addEventListener("click", checkAnswer);