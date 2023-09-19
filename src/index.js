import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { SolarYears } from './js/solaryears.js';

function handleSolarYearsForm(event) {
  event.preventDefault();
  const ageOfUser = parseInt(document.querySelector('#userAge').value);
  const pastBirthdayAge = parseInt(document.querySelector('#pastBdayAge').value);
  const futureBirthdayAge = parseInt(document.querySelector('#futureBdayAge').value);
  const solarYears = new SolarYears(ageOfUser);
  solarYears.calculateSolarYears();
  solarYears.howManyYearsSincePastBday(pastBirthdayAge);
  solarYears.howManyYearsUntilFutureBday(futureBirthdayAge);
  const earthYears = solarYears.earthYears;
  const earthYearsPast = solarYears.earthYearsPast;
  const earthYearsFuture = solarYears.earthYearsFuture;
  const jupiterYears = solarYears.jupiterYears;
  const jupiterYearsPast = solarYears.jupiterYearsPast;
  const jupiterYearsFuture = solarYears.jupiterYearsFuture;
  const marsYears = solarYears.marsYears;
  const marsYearsPast = solarYears.marsYearsPast;
  const marsYearsFuture = solarYears.marsYearsFuture;
  const mercuryYears = solarYears.mercuryYears;
  const mercuryYearsPast = solarYears.mercuryYearsPast;
  const mercuryYearsFuture = solarYears.mercuryYearsFuture;
  const venusYears = solarYears.venusYears;
  const venusYearsPast = solarYears.venusYearsPast;
  const venusYearsFuture = solarYears.venusYearsFuture;
  document.querySelector('#ageCalculations').innerText = `You are ${earthYears} years old. \n You are ${mercuryYears} years old on Mercury. \n You are ${venusYears} years old on Venus. \n You are ${marsYears} years old on Mars. \n You are ${jupiterYears} years old on Jupiter.`;
  document.querySelector('#pastBdayCalculations').innerText = `It has been ${earthYearsPast} years since your past birthday. \n It has been ${mercuryYearsPast} Mercury years since your past birthday. \n It has been ${venusYearsPast} Venus years since your past birthday. \n It has been ${marsYearsPast} Mars years since your past birthday. \n It has been ${jupiterYearsPast} Jupiter years since your past birthday.`;
  document.querySelector('#futureBdayCalculations').innerText = `It will be ${earthYearsFuture} years until your future birthday. \n It will be ${mercuryYearsFuture} Mercury years until your future birthday. \n It will be ${venusYearsFuture} Venus years until your future birthday. \n It will be ${marsYearsFuture} Mars years until your future birthday. \n It will be ${jupiterYearsFuture} Jupiter years until your future birthday.`;
}

window.addEventListener("load", function() {
  document.querySelector("#galactic-age-checker-form").addEventListener("submit", handleSolarYearsForm);
});