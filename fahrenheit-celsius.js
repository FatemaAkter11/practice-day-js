// fahrenheit-celsius.js

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    let result = fahrenheit + ' = ' + celsius;
    console.log('Fahrenheit to Celsius : ', result);
}
const finalCelsius = fahrenheitToCelsius(12);