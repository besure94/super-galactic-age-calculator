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
  const ageInSolarYears = solarYears.calculateSolarYears(userAge);
  const solarYearsSinceLastBday = solarYears.howManyYearsSincePastBday(pastBdayAge, futureBdayAge);
  const solarYearsUntilFutureBday = solarYears.howManyYearsUntilFutureBday(futureBdayAge, userAge);
  const pTagOne = document.createElement("p");
  const pTagTwo = document.createElement("p");
  const pTagThree = document.createElement("p");
  pTagOne.append(`Your age in solar years is: ${ageInSolarYears}.`);
  pTagTwo.append(`The number of solar years since your past birthday and current age is: ${solarYearsSinceLastBday}.`);
  pTagThree.append(`The number of solar years from your current age to your future birthday is: ${solarYearsUntilFutureBday}.`);
}

window.addEventListener("load", function() {
  document.querySelector("#galactic-age-checker-form").addEventListener("submit", handleSolarYearsForm);
});