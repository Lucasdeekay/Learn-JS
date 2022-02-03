const USER = {'score': 0, 'count': 0};
const DEALER = {'score': 0, 'count': 0};
const SCOREBOARD = {'wins': 0, 'draws': 0, 'losses': 0}
const BUTTONS = {'hit': true, 'stand': false, 'deal': false}
const CARDS = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'A'];

defaultOuputs();

document.querySelector('#hitButton').addEventListener('click', blackjackHit);
document.querySelector('#standButton').addEventListener('click', blackjackStand);
document.querySelector('#dealButton').addEventListener('click', blackjackDeal);

function defaultOuputs() {
    defaultStyling();
    displayScores();
}

function defaultStyling() {
    document.querySelector('#gameMessage').innerHTML = "<h2>Let's Play</h2>";
    document.querySelector('#gameMessage').style.color = 'white';
    document.querySelector('#userScore').innerHTML = '<h2>' + USER['count'] + '</h2>';
    document.querySelector('#dealerScore').innerHTML = '<h2>' + DEALER['count'] + '</h2>';
}

function displayScores() {
    document.querySelector('#wins').innerHTML = SCOREBOARD['wins'];
    document.querySelector('#draws').innerHTML = SCOREBOARD['draws'];
    document.querySelector('#losses').innerHTML = SCOREBOARD['losses'];
}

function pickCard() {
    let randomIndex = Math.floor(Math.random() * CARDS.length);
    return CARDS[randomIndex];
}

function insertImage(currentPlayer, card) {
    let currentBox = document.querySelector(`#${currentPlayer}Box`);
    let image = document.createElement('img');
    image.src = `statics/image/blackjack/${card}.png`;
    image.height = '150px';
    image.width = '150px';
    currentBox.appendChild(image);
}

function incrementCount(currentPlayer, currentPlayerString, card) {
    if (card >= parseInt('2') && card <= parseInt('10')) {
        currentPlayer['count'] += parseInt(card);
    }
    else if (card == 'J') {
        currentPlayer['count'] += 11;
    }
    else if (card == 'Q') {
        currentPlayer['count'] += 12;
    }
    else if (card == 'K') {
        currentPlayer['count'] += 13;
    }
    else if (card == 'A') {
        currentPlayer['count'] + 11 > 21 ? currentPlayer['count'] += 1 : currentPlayer['count'] += 11;
    }
    document.querySelector('#' + currentPlayerString +'Score').innerHTML = '<h2>' + currentPlayer['count'] + '</h2>';
}

function checkCount(currentPlayer, currentPlayerString) {
    if (currentPlayer['count'] > 21) {
        document.querySelector('#' + currentPlayerString + 'Score').innerHTML = '<h2>BUSTED!</h2>'
        document.querySelector('#' + currentPlayerString + 'Score').style.color = 'red';
    }
}

function drawOperation() {
    if ( (USER['count'] === DEALER['count']) || (DEALER['count'] > 21 && USER['count'] > 21) ) {
        SCOREBOARD['draws']++;
        document.querySelector('#gameMessage').innerHTML = '<h2>Tie!</h2>';
        document.querySelector('#gameMessage').style.color = 'brown';
        displayScores()
    }
}

function winOperation() {
    if ( ((USER['count'] <= 21) && (USER['count'] > DEALER['count'])) || (DEALER['count'] > 21 && USER['count'] <= 21) ) {
        SCOREBOARD['wins']++;
        document.querySelector('#gameMessage').innerHTML = '<h2>You Win!</h2>';
        document.querySelector('#gameMessage').style.color = 'green';
        displayScores()
    }
}

function loseOperation() {
    if ( ((DEALER['count'] <= 21) && (DEALER['count'] > USER['count'])) || (USER['count'] > 21 && DEALER['count'] <= 21) ) {
        SCOREBOARD['losses']++;
        document.querySelector('#gameMessage').innerHTML = '<h2>You Lose!</h2>';
        document.querySelector('#gameMessage').style.color = 'red';
        displayScores()
    }
}

function updateScores() {
    winOperation();
    drawOperation();
    loseOperation();
}

function sleep(ms) {
    return new Promise (resolve => (setTimeout(resolve, ms)) );
}

function removeImages(currentPlayer) {
    let currentBox = document.querySelector(`#${currentPlayer}Box`).querySelectorAll('img');
    
    for (let count = 0; count < currentBox.length; count++) {
        currentBox[count].remove();
    }
}

function resetGame() {
    USER['count'] = 0;
    DEALER['count'] = 0;
    document.querySelector('#userScore').style.color = 'white';
    document.querySelector('#dealerScore').style.color = 'white';
    defaultStyling();
    removeImages('user');
    removeImages('dealer');
}

function blackjackHit() {
    if ( (BUTTONS['hit'] === true) && (USER['count'] <= 21) ) {
        let currentPlayerString = 'user'
        let card = pickCard();
        insertImage(currentPlayerString, card);
        incrementCount(USER, currentPlayerString, card);
        checkCount(USER, currentPlayerString);
    }
}

async function blackjackStand() {
    BUTTONS['hit'] = false;
    BUTTONS['stand'] = true;
    if (BUTTONS['stand'] === true) {
        while (DEALER['count'] < 17) {
            let currentPlayerString = 'dealer'
            let card = pickCard();
            insertImage(currentPlayerString, card);
            incrementCount(DEALER, currentPlayerString, card);
            checkCount(DEALER, currentPlayerString);
            await sleep(1000);
            if (DEALER['count'] > USER['count']) {
                break;
            }
        }
    }
    updateScores();
    BUTTONS['stand'] = false;
    BUTTONS['deal'] = true;
}

function blackjackDeal() {
    if (BUTTONS['deal'] === true) {
        resetGame();
    }
    BUTTONS['deal'] = false;
    BUTTONS['hit'] = true;
}

