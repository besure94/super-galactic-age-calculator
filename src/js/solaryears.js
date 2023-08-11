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

  calculateSolarYears() {
    this.mercuryYears = parseFloat((this.userAge / this.mercuryRate).toFixed(2));
    this.venusYears = parseFloat((this.userAge / this.venusRate).toFixed(2));
    this.earthYears = parseInt(this.userAge);
    this.marsYears = parseFloat((this.userAge / this.marsRate).toFixed(2));
    this.jupiterYears = parseFloat((this.userAge / this.jupiterRate).toFixed(2));
  }

  howManyYearsSincePastBday(pastBdayAge) {
    this.mercuryYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.mercuryRate).toFixed(2));
    this.venusYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.venusRate).toFixed(2));
    this.earthYearsPast = parseInt((this.userAge - pastBdayAge));
    this.marsYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.marsRate).toFixed(2));
    this.jupiterYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.jupiterRate).toFixed(2));
  }

  howManyYearsUntilFutureBday(futureBdayAge, userAge) {
    this.mercuryYears = parseFloat(((futureBdayAge - userAge) / 0.24).toFixed(2));
    this.venusYears = parseFloat(((futureBdayAge - userAge) / 0.62).toFixed(2));
    this.earthYears = parseInt((futureBdayAge - userAge));
    this.marsYears = parseFloat(((futureBdayAge - userAge) / 1.88).toFixed(2));
    this.jupiterYears = parseFloat(((futureBdayAge - userAge) / 11.86).toFixed(2));
  }
}