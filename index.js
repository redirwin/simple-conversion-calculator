let inputNum = 56;

document.getElementById("input").textContent = inputNum; // Changes input to hard coded input.

document.getElementById("input-meters").textContent = inputNum;
document.getElementById("input-feet").textContent = inputNum;
document.getElementById("input-liters").textContent = inputNum;
document.getElementById("input-gallons").textContent = inputNum;
document.getElementById("input-kilograms").textContent = inputNum;
document.getElementById("input-pounds").textContent = inputNum;

let metersToFeet = (inputNum * 3.28084).toFixed(3);
let feetToMeters = (inputNum * 0.3048).toFixed(3);
let litersToGallons = (inputNum * 0.264172).toFixed(3);
let gallonsToLiters = (inputNum * 3.78541).toFixed(3);
let kilosToPounds = (inputNum * 2.20462).toFixed(3);
let poundsToKilos = (inputNum * 0.453592).toFixed(3);

document.getElementById("meters-to-feet").textContent = metersToFeet;
document.getElementById("feet-to-meters").textContent = feetToMeters;
document.getElementById("liters-to-gallons").textContent = litersToGallons;
document.getElementById("gallons-to-liters").textContent = gallonsToLiters;
document.getElementById("kilograms-to-pounds").textContent = kilosToPounds;
document.getElementById("pounds-to-kilograms").textContent = poundsToKilos;
