let celsiusEl = document.getElementById('celsius-el');
let fahrenheitEl = document.getElementById('fahrenheit-el');

function convert() {
  let celsius = celsiusEl.value;
  fahrenheitEl.innerText = `${(9 * celsius + 160) / 5} degree Fahrenheit.`;
};
