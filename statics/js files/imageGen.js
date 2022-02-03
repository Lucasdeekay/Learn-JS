
document.getElementById('imageOutput').style.display = 'none';

document.getElementById('genButton').addEventListener('click', (e) => {
    document.getElementById('resetButton').style.background = 'blue';
    document.getElementById('imageOutput').style.display = 'block';
    const image = document.createElement('img'); 
    image.src = 'love.png';
    image.width = 100;
    const output = document.getElementById('imageOutput');
    output.appendChild(image);
});

document.getElementById('resetButton').addEventListener('click', (e) => {
    document.getElementById('resetButton').style.background = 'red';
    document.getElementById('imageOutput').remove('img');
});