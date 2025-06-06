  document.getElementById("convertBtn").addEventListener("click", function () {
      const tempInput = document.getElementById("temperature");
      const fromType = document.getElementById("fromType").value;
      const toType = document.getElementById("toType").value;
      const resultDiv = document.getElementById("result");
      const errorDiv = document.getElementById("tempError");

      const temp = parseFloat(tempInput.value);

      if (tempInput.value === "") {
        errorDiv.textContent = "Please enter a temperature";
        resultDiv.textContent = "";
        return;
      }
      if (isNaN(temp)) {
        errorDiv.textContent = "Please enter a valid number";
        resultDiv.textContent = "";
        return;
      }

      errorDiv.textContent = "";

      if (fromType === toType) {
        resultDiv.textContent = `Same unit selected. Value remains: ${temp}°`;
        return;
      }

      let tempInCelsius;
      if (fromType === "celsius") tempInCelsius = temp;
      else if (fromType === "fahrenheit") tempInCelsius = (temp - 32) * 5 / 9;
      else if (fromType === "kelvin") tempInCelsius = temp - 273.15;

      let converted;
      if (toType === "celsius") converted = `${tempInCelsius.toFixed(2)} °C`;
      else if (toType === "fahrenheit") converted = `${((tempInCelsius * 9 / 5) + 32).toFixed(2)} °F`;
      else if (toType === "kelvin") converted = `${(tempInCelsius + 273.15).toFixed(2)} K`;

      resultDiv.textContent = `Converted Temperature: ${converted}`;
    });
 