
let degree = document.getElementById("degree");
let temperatureType = document.getElementById("temperature-type");
let convertButton = document.getElementById("convert-button");
let celciusField = document.getElementById("celsius");

window.addEventListener("load", () => {
    degree.value = "";
    celciusField.innerHTML = "";
})

convertButton.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelcius();

    convertButton.innerHTML = "<span> <i class='fa fa-solid fa-spinner fa-spin'></i> Converting... </span>";
    setTimeout(() => {
        convertButton.innerHTML = "<span>Convert </span>"
    }, 1000)
})

function convertToCelcius() {
    let inputValue = degree.value;

    setTimeout(() => {
        if (temperatureType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9)
            celciusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
        }
    
        else if(temperatureType.value === "kelvin") {
            const kelvinToCelsius = inputValue - 373.15;
            celciusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
        }
    }, 1200)

    
}