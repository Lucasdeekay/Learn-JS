
document.getElementById('weightOutput').style.display = 'none';

document.getElementById('weightUnit').addEventListener('change', (e) =>{
    document.getElementById('weightUnit').value; 
});

document.getElementById('weightInput').addEventListener('input', (e) =>{
    e.preventDefault();
    document.getElementById('weightOutput').style.display = 'block';
    
    const userWeight = e.target.value;

    let currentWeightUnit = document.getElementById('weightUnit').value;

    switch (currentWeightUnit){
        case 'Pounds':
            document.getElementById('LbsOutput').innerHTML = userWeight + 'lbs';
            document.getElementById('KgOutput').innerHTML = userWeight * 0.454 + 'kg';
            document.getElementById('GramOutput').innerHTML = userWeight * 453.592 + 'g';
            break;
        case 'Kilogram':
            document.getElementById('LbsOutput').innerHTML = userWeight * 2.205 + 'lbs';
            document.getElementById('KgOutput').innerHTML = userWeight + 'kg';
            document.getElementById('GramOutput').innerHTML = userWeight * 1000 + 'g';
            break;
        case 'Gramme':
            document.getElementById('LbsOutput').innerHTML = userWeight * 0.0022 + 'lbs';
            document.getElementById('KgOutput').innerHTML = userWeight * 0.001 + 'kg';
            document.getElementById('GramOutput').innerHTML = userWeight + 'g';
            break;
        default:
            document.getElementById('weightOutput').style.visibility = 'hidden';
    }
});

