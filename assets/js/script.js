const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let weight1 = document.getElementById('weight');
    let height1 = document.getElementById('height');

    const weight = weight1.value.replace(',', '.');
    const height = height1.value.replace(',', '.');

    if(isNaN(weight) || isNaN(height)) {
        alert('Por favor, insira valores númericos válidos para peso e altura!');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    
    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = "Cuidado! Você está abaixo do peso!";
        value.classList.remove('normal');
    } else if (bmi >= 18.5 && bmi < 25 ) {
        description = "Vocês está no seu peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
        value.classList.remove('normal');
    } else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
        value.classList.remove('normal');
    } else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
        value.classList.remove('normal');
    } else {
        description = "Cuidado! Você está com obesidade morbida!";
        value.classList.remove('normal');
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});