import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarYears } from './js/solaryears.js';

function handleSolarYearsForm(event) {
  event.preventDefault();
  document.querySelector('#ageCalculations').innerText = null;
  document.querySelector('#pastBdayCalculations').innerText = null;
  document.querySelector('#futureBdayCalculations').innerText = null;
  const ageOfUser = parseInt(document.querySelector('#userAge').value);
  const pastBirthdayAge = parseInt(document.querySelector('#pastBdayAge').value);
  const futureBirthdayAge = parseInt(document.querySelector('#futureBdayAge').value);
  const solarYears = new SolarYears();
  const ageInSolarYears = solarYears.calculateSolarYears(ageOfUser);
  const solarYearsSinceLastBday = solarYears.howManyYearsSincePastBday(ageOfUser, pastBirthdayAge);
  const solarYearsUntilFutureBday = solarYears.howManyYearsUntilFutureBday(futureBirthdayAge, ageOfUser);
  const pTagOne = document.createElement("p");
  const pTagTwo = document.createElement("p");
  const pTagThree = document.createElement("p");
  pTagOne.append(`Your age in solar years is: ${ageInSolarYears}.`);
  pTagTwo.append(`The number of solar years since your past birthday and current age is: ${solarYearsSinceLastBday}.`);
  pTagThree.append(`The number of solar years from your current age to your future birthday is: ${solarYearsUntilFutureBday}.`);
  document.querySelector('#ageCalculations').append(pTagOne);
  document.querySelector('#pastBdayCalculations').append(pTagTwo);
  document.querySelector('#futureBdayCalculations').append(pTagThree);
}

window.addEventListener("load", function() {
  document.querySelector("#galactic-age-checker-form").addEventListener("submit", handleSolarYearsForm);
});