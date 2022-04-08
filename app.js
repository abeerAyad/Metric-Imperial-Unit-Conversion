let input = document.querySelector("input");
input.addEventListener("keyup", convert);
function convert() {
  let numberConvert = input.value;

  // Convert Meter/Feet

  let feet = (numberConvert * 100) / 2.54 / 12;
  let metter = numberConvert * 0.3048;
  document.querySelector(
    "#metter-feet"
  ).textContent = `${numberConvert} meters = ${feet.toFixed(
    3
  )} feet | ${numberConvert} feet = ${metter.toFixed(3)} meters`;

  // Convert Liters/Gallons

  let gallon = numberConvert * 0.2641722;
  let liter = numberConvert * 3.785412;
  document.querySelector(
    "#liter-gallon"
  ).textContent = `${numberConvert} liters = ${gallon.toFixed(
    3
  )} gallons | ${numberConvert} gallons = ${liter.toFixed(3)} liters`;

  // Convert Kilograms/Pounds
  let pound = numberConvert * 2.20462262185;
  let kilo = numberConvert * 0.45359237;
  document.querySelector(
    "#kilogram-pound"
  ).textContent = `${numberConvert} kilos = ${pound.toFixed(
    3
  )} pounds | ${numberConvert} pounds = ${kilo.toFixed(3)} kilos`;
}
