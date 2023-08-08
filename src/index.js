import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarYears } from './js/solaryears.js';

function handleSolarYearsForm(event) {
  event.preventDefault();
  document.querySelector('#ageCalculations').innerText = null;
  document.querySelector('#pastBdayCalculations').innerText = null;
  document.querySelector('#futureBdayCalculations').innerText = null;
  const userAge = parseInt(document.querySelector('#userAge').value);
  const pastBdayAge = parseInt(document.querySelector('#pastBdayAge').value);
  const futureBdayAge = parseInt(document.querySelector('#futureBdayAge').value);
  const solarYears = new SolarYears();
}

window.addEventListener("load", function() {
  document.querySelector("#galactic-age-checker-form").addEventListener("submit", handleSolarYearsForm);
});