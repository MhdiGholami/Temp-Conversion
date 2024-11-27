// Temp Conversion
// ****************


// Dom Elements Selection
let para = document.querySelector('p')
let celc = document.getElementById('celcius')
let fahr = document.getElementById('fahrenheit')
let celciusInp = document.getElementById('celcius-input')
let fahrenheitInp = document.getElementById('fahrenheit-input')
let flag = false


function changeAction() {
    if (para.innerHTML === 'Converter °C to °F' && celc.innerHTML === 'Celcius' && fahr.innerHTML === 'Fahrenheit') {
        para.innerHTML = 'Converter °F to °C'
        celc.innerHTML = 'Fahrenheit'
        fahr.innerHTML = 'Celcius'
        celciusInp.placeholder = '°f'
        fahrenheitInp.placeholder = '°c'
        flag = true
    } else {
        para.innerHTML = 'Converter °C to °F'
        celc.innerHTML = 'Celcius'
        fahr.innerHTML = 'Fahrenheit'
        celciusInp.placeholder = '°c'
        fahrenheitInp.placeholder = '°f'
        flag = true
    }
}

function convertAction() {
    if (flag === false) {
        fahrenheitInp.value = (celciusInp.value * (9 / 5)) + 32
    } else {
        fahrenheitInp.value = (celciusInp.value - 32) * 5 / 9
    }
}

function resetAction() {
    para.innerHTML = 'Converter °C to °F'
    celc.innerHTML = 'Celcius'
    fahr.innerHTML = 'Fahrenheit'
    celciusInp.placeholder = '°c'
    fahrenheitInp.placeholder = '°f'
    celciusInp.value = ''
    fahrenheitInp.value = ''
}






