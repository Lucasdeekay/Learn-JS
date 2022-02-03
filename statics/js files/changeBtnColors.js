const colorClass = document.getElementsByTagName('button');
const defaultColorsList = defaultColors();

function changeButtonColors(userChoice) {
    if ( (userChoice.value === 'blueviolet') | (userChoice.value === 'red') | (userChoice.value === 'green') | (userChoice.value === 'yellow')) {
        addColorToButton(userChoice.value);
    }
    else if (userChoice.value === 'reset') {
        resetColors();
    }
    else if (userChoice.value === 'random') {
        randomColors();
    }
}

function addColorToButton(color) {
    for (let count=0; count<defaultColorsList.length; count++) {
        colorClass[count].classList.remove(colorClass[count].classList[1]);
        colorClass[count].classList.add(color);
    }
}

function defaultColors() {
    const colorClassCopy = []
    for (let count=0; count<colorClass.length; count++) {
        colorClassCopy.push(colorClass[count].classList[1]);
    }
    return colorClassCopy;
}

function randomColors() {
    const randomChoices = [];

    while (randomChoices.length != 7) {
        let color = defaultColorsList[Math.floor(Math.random() * defaultColorsList.length)];
        if (!randomChoices.includes(color)) {
            randomChoices.push(color);
        }
    }

   for (let count=0; count<defaultColorsList.length; count++) {
       colorClass[count].classList.remove(colorClass[count].classList[1]);
       let random = Math.floor(Math.random() * randomChoices.length);
       colorClass[count].classList.add(randomChoices[random]);
   }

}

function resetColors() {
    for (let count=0; count<defaultColorsList.length; count++) {
        colorClass[count].classList.remove(colorClass[count].classList[1]);
        colorClass[count].classList.add(defaultColorsList[count]);
    }
}