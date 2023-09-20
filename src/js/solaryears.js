export class SolarYears {
  constructor(userAge) {
    this.userAge = userAge;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.earthYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.saturnYears = 0;
    this.uranusYears = 0;
    this.neptuneYears = 0;
    this.plutoYears = 0;
    this.mercuryRate = 0.24;
    this.venusRate = 0.62;
    this.marsRate = 1.88;
    this.jupiterRate = 11.86;
    this.saturnRate = 29.46;
    this.uranusRate = 84.01;
    this.neptuneRate = 164.8;
    this.plutoRate = 248.6;
  }

  calculateSolarYears() {
    this.mercuryYears = parseFloat((this.userAge / this.mercuryRate).toFixed(2));
    this.venusYears = parseFloat((this.userAge / this.venusRate).toFixed(2));
    this.earthYears = parseInt(this.userAge);
    this.marsYears = parseFloat((this.userAge / this.marsRate).toFixed(2));
    this.jupiterYears = parseFloat((this.userAge / this.jupiterRate).toFixed(2));
    this.saturnYears = parseFloat((this.userAge / this.saturnRate).toFixed(2));
    this.uranusYears = parseFloat((this.userAge / this.uranusRate).toFixed(2));
    this.neptuneYears = parseFloat((this.userAge / this.neptuneRate).toFixed(2));
    this.plutoYears = parseFloat((this.userAge / this.plutoRate).toFixed(2));
  }

  howManyYearsSincePastBday(pastBdayAge) {
    this.mercuryYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.mercuryRate).toFixed(2));
    this.venusYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.venusRate).toFixed(2));
    this.earthYearsPast = parseInt((this.userAge - pastBdayAge));
    this.marsYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.marsRate).toFixed(2));
    this.jupiterYearsPast = parseFloat(((this.userAge - pastBdayAge) / this.jupiterRate).toFixed(2));
  }

  howManyYearsUntilFutureBday(futureBdayAge) {
    this.mercuryYearsFuture = parseFloat(((futureBdayAge - this.userAge) / this.mercuryRate).toFixed(2));
    this.venusYearsFuture = parseFloat(((futureBdayAge - this.userAge) / this.venusRate).toFixed(2));
    this.earthYearsFuture = parseInt((futureBdayAge - this.userAge));
    this.marsYearsFuture = parseFloat(((futureBdayAge - this.userAge) / this.marsRate).toFixed(2));
    this.jupiterYearsFuture = parseFloat(((futureBdayAge - this.userAge) / this.jupiterRate).toFixed(2));
  }
}