export class SolarYears {
  constructor(userAge) {
    this.userAge = userAge;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.earthYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.mercuryRate = 0.24;
    this.venusRate = 0.62;
    this.marsRate = 1.88;
    this.jupiterRate = 11.86;
  }

  calculateSolarYears(userAge) {
    this.mercuryYears = parseFloat((userAge / 0.24).toFixed(2));
    this.venusYears = parseFloat((userAge / 0.62).toFixed(2));
    this.earthYears = parseInt(userAge);
    this.marsYears = parseFloat((userAge / 1.88).toFixed(2));
    this.jupiterYears = parseFloat((userAge / 11.86).toFixed(2));
  }

  howManyYearsSincePastBday(userAge, pastBdayAge) {
    this.mercuryYears = parseFloat(((userAge - pastBdayAge) / 0.24).toFixed(2));
    this.venusYears = parseFloat(((userAge - pastBdayAge) / 0.62).toFixed(2));
    this.earthYears = parseInt((userAge - pastBdayAge));
    this.marsYears = parseFloat(((userAge - pastBdayAge) / 1.88).toFixed(2));
    this.jupiterYears = parseFloat(((userAge - pastBdayAge) / 11.86).toFixed(2));
  }

  howManyYearsUntilFutureBday(futureBdayAge, userAge) {
    this.mercuryYears = parseFloat(((futureBdayAge - userAge) / 0.24).toFixed(2));
    this.venusYears = parseFloat(((futureBdayAge - userAge) / 0.62).toFixed(2));
    this.earthYears = parseInt((futureBdayAge - userAge));
    this.marsYears = parseFloat(((futureBdayAge - userAge) / 1.88).toFixed(2));
    this.jupiterYears = parseFloat(((futureBdayAge - userAge) / 11.86).toFixed(2));
  }
}