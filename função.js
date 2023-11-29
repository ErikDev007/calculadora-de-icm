const form = document.querySelector('#form');
form.addEventListener('submit',function (e) {
    e.preventDefault();
    const weight = form.querySelector('#weight').value;
    const height = form.querySelector('#height').value;

    const bmi = (weight / (height * height)).toFixed(2);
    const value = document.querySelector('#value')
    let description = '';

    value.classList.add('attention');

    document.querySelector('#infos').classList.remove('hidden');
    
    if (bmi < 18.5 ) {
        description = 'Abaixo do peso!';
    }

    else if (bmi >= 18.5 && bmi <= 24.9) {
        description = 'você está Com peso normal!'
        value.classList.remove('attention');
        value.classList.add('normal');
    }

    else if (bmi >= 25.0 && bmi <= 29.9){
        description = 'você está Com excesso de peso!'
    }

    else if (bmi >= 30 && bmi <= 34.5) {
        description = 'você está com Obesidade Moderada!'
    }

    else if (bmi >= 35 && bmi <= 40){
        description = 'você está com Obesidade Severa!';
    }

    else {
        description = 'você está com Obesidade Morbida!';
    }
    value.textContent = bmi.replace('.',',');
    document.querySelector('.description').textContent = description;
});