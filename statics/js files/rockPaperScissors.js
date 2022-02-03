const image1 = document.createElement('img');
const image2 = document.createElement('img');
image1.style.width = '100px';
image1.style.height = '100px';
image2.style.width = '100px';
image2.style.height = '100px';

playerScore = 0;
computerScore = 0;

document.getElementById('rpsOutputMain').style.display = 'none';

function getRPSWinner(userChoice) {
    document.getElementById('rpsOutputMain').style.display = 'block';

    const playerChoice = userChoice.id;
    const computerChoice = getRandomChoice();
    const rpsResult = checkResults(playerChoice, computerChoice);
    styleOutput(rpsResult);
}

function getRandomChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()* options.length);
    return options[randomNumber];
}

function checkResults(playerChoice, computerChoice) {
    let result; // Returns user's status only
    const rockPicture = 'statics/image/IMG_20200904_121236_925.jpg';
    const paperPicture = 'statics/image/IMG_20200904_121016_260.jpg';
    const scissorsPicture = 'statics/image/IMG_20200904_121057_193.jpg';

    switch (playerChoice){
        case 'rock':
            switch (computerChoice){
                case 'rock':
                    result = {
                        'outcome': 'tie',
                        'src1': rockPicture,
                        'src2': rockPicture,
                        'message': '<h2>TIE</h2>',
                        'color': 'blue'
                    };
                    break;
                case 'paper':
                    result = {
                        'outcome': 'lose',
                        'src1': rockPicture,
                        'src2': paperPicture,
                        'message': '<h2>YOU LOSE</h2>',
                        'color': 'red'
                    };
                    break;
                case 'scissors':
                    result = {
                        'outcome': 'win',
                        'src1': rockPicture,
                        'src2': scissorsPicture,
                        'message': '<h2>YOU WIN</h2>',
                        'color': 'green'
                    };
                    break;
            }
            break;
        case 'paper':
            switch (computerChoice){
                case 'rock':
                    result = {
                        'outcome': 'win',
                        'src1': paperPicture,
                        'src2': rockPicture,
                        'message': '<h2>YOU WIN</h2>',
                        'color': 'green'
                    };
                    break;
                case 'paper':
                    result = {
                        'outcome': 'tie',
                        'src1': paperPicture,
                        'src2': paperPicture,
                        'message': '<h2>TIE</h2>',
                        'color': 'blue'
                    };
                    break;
                case 'scissors':
                    result = {
                        'outcome': 'lose',
                        'src1': paperPicture,
                        'src2': scissorsPicture,
                        'message': '<h2>YOU LOSE</h2>',
                        'color': 'red'
                    };
                    break;
            }
            break;
        case 'scissors':
            switch (computerChoice){
                case 'rock':
                    result = {
                        'outcome': 'lose',
                        'src1': scissorsPicture,
                        'src2': rockPicture,
                        'message': '<h2>YOU LOSE</h2>',
                        'color': 'red'
                    };
                    break;
                case 'paper':
                    result = {
                        'outcome': 'win',
                        'src1': scissorsPicture,
                        'src2': paperPicture,
                        'message': '<h2>YOU WIN</h2>',
                        'color': 'green'
                    };
                    break;
                case 'scissors':
                    result = {
                        'outcome': 'tie',
                        'src1': scissorsPicture,
                        'src2': scissorsPicture,
                        'message': '<h2>TIE</h2>',
                        'color': 'blue'
                    };
                    break;
            }
            break;
    }
    return result;
};

function styleOutput(rpsResult) {
    image1.src = rpsResult.src1;
    image2.src = rpsResult.src2;
    
    switch (rpsResult.outcome) {
        case 'tie':
            document.getElementById('rpsOutput1').appendChild(image1);
            image1.style.boxShadow = '2px 2px 5px 5px blue';
            document.getElementById('rpsOutput2').appendChild(image2);
            image2.style.boxShadow = '2px 2px 5px 5px blue';
            break;
        case 'lose':
            document.getElementById('rpsOutput1').appendChild(image1);
            image1.style.boxShadow = '2px 2px 5px 5px red';
            document.getElementById('rpsOutput2').appendChild(image2);
            image2.style.boxShadow = '2px 2px 5px 5px green';
            computerScore++;
            break;
        default:
            document.getElementById('rpsOutput1').appendChild(image1);
            image1.style.boxShadow = '2px 2px 5px 5px green';
            document.getElementById('rpsOutput2').appendChild(image2);
            image2.style.boxShadow = '2px 2px 5px 5px red';
            playerScore++;
            break;
    }
    document.getElementById('rpsMessage').innerHTML = rpsResult.message;
    document.getElementById('rpsMessage').style.color = rpsResult.color;
    document.getElementById('playerScore').innerHTML = '<h1>' + playerScore + '</h1>';
    document.getElementById('computerScore').innerHTML = '<h1>' + computerScore + '</h1>';
}


