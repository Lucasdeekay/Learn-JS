
document.getElementById('resultOutput').style.display = 'none';

document.getElementById('submitButton').addEventListener('click', (e) => {
    document.getElementById('resultOutput').style.display = 'block';
    document.getElementById('submitButton').style.background = 'rgb(0, 255, 0)';
    const convertedAge = document.getElementById('ageInput').value * 365;
    document.getElementById('resultOutput').innerHTML = 'You are ' + convertedAge + ' days old.'
});