let form = document.getElementById("form-convert");
let centimeterSizeInput = document.getElementById("centimeter-size");
let alphasSizeInput = document.getElementById("alphas-size");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let centimeterSizeValue = centimeterSizeInput.value;
  let alphasSizeValue = alphasSizeInput.value;

  console.log("Centimer: ", centimeterSizeValue);
  console.log("Alphas: ", alphasSizeValue);

  console.log(
    "centimeterSizeValue && centimeterSizeValue.length > 1",
    centimeterSizeValue.length >= 1,
  );
  if (centimeterSizeValue.length >= 1) {
    alphasSizeInput.value = convertCentimerToAlphas(centimeterSizeValue);
    console.log("", convertCentimerToAlphas(centimeterSizeValue));
  }

  if (alphasSizeValue.length >= 1) {
    centimeterSizeInput.value = convertAlphasToCentimeter(alphasSizeValue);
    console.log("", convertAlphasToCentimeter(alphasSizeValue));
  }
});

centimeterSizeInput.addEventListener("change", (event) => {
  if (event.target.value.length >= 1) {
    alphasSizeInput.disabled = true;
  }
});

alphasSizeInput.addEventListener("change", (event) => {
  if (event.target.value.length >= 1) {
    centimeterSizeInput.disabled = true;
  }
});

function resetForm() {
  form.reset();
  alphasSizeInput.disabled = false;
  centimeterSizeInput.disabled = false;
}

function convertAlphasToCentimeter(value) {
  let ans = value * 18;
  return ans.toFixed(2);
}

function convertCentimerToAlphas(value) {
  let ans = value / 18;
  return ans.toFixed(2);
}

function text(text) {
  return document.createTextNode(text);
}
