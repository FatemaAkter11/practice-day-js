// celsius-fahrenheit.js
function celsiusToFahrenheit(celsius) {
    const fahrenheit = celsius * 9 / 5 + 32;
    let result = celsius + ' = ' + fahrenheit;
    console.log('Celsius to Fahrenheit : ', result);
}
const finalCelsius = celsiusToFahrenheit(12);