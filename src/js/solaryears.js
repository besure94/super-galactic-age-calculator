export class SolarYears {
  constructor() {
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.earthYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
  }

  calculateSolarYears(userAge) {
    this.mercuryYears = parseFloat((userAge / 0.24).toFixed(2));
    this.venusYears = parseFloat((userAge / 0.62).toFixed(2));
    this.marsYears = parseFloat((userAge / 1.88).toFixed(2));
    this.jupiterYears = parseFloat((userAge / 11.86).toFixed(2));
  }

  howManyYearsSincePastBday(userAge, pastBdayAge) {
    this.earthYears = parseInt((userAge - pastBdayAge));
    this.mercuryYears = parseFloat(((userAge - pastBdayAge) / 0.24).toFixed(2));
    this.venusYears = parseFloat(((userAge - pastBdayAge) / 0.62).toFixed(2));
    this.marsYears = parseFloat(((userAge - pastBdayAge) / 1.88).toFixed(2));
    this.jupiterYears = parseFloat(((userAge - pastBdayAge) / 11.86).toFixed(2));
  }

  howManyYearsUntilFutureBday(userAge, futureBdayAge) {

  }
}