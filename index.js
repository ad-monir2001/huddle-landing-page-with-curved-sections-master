let celsiusEl = document.getElementById('celsius-el');
let fahrenheitEl = document.getElementById('fahrenheit-el');

function convert() {
  let celsius = celsiusEl.value;
  const fahrenheit = (9 * celsius + 160) / 5;
  fahrenheitEl.innerText = `${fahrenheit} degree Fahrenheit.`;
};
