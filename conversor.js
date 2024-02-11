function convertirTemperatura() {
    let temperaturaCelsius = parseFloat(document.getElementById("temperaturaCelsius").value);

    if (isNaN(temperaturaCelsius)) {
        alert("Por favor, ingrese un número válido.");
        return;
    }

    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    let temperaturaKelvin = temperaturaCelsius + 273.15;

    let resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "<h2>Resultados:</h2>" +
        "<p>Temperatura en grados Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + "</p>" +
        "<p>Temperatura en Kelvin: " + temperaturaKelvin.toFixed(2) + "</p>";
}