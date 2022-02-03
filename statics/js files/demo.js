function rollDice(){
    return Math.ceil(Math.random() * 6);
}

function diceSimulator(numberOfDice){
    const diceList = []
    for (let count = 0; count < numberOfDice; count++){
        diceList.push(rollDice());
    }


    let index = 1;
    diceList.forEach(element => {
        console.log(`Dice ${index}: ${element}`);
        index++;
    });

    let sum = 0;
    diceList.forEach(element =>{
        sum += element;
    })

    console.log(`Total Roll: ${sum}`);
}

diceSimulator(2);