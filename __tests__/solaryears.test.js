import { SolarYears } from '../src/js/solaryears.js';

describe('SolarYears', () => {
  let solarYears;

  beforeEach(() => {
    solarYears = new SolarYears(40);
  });

  test('should create a SolarYears object with a property for the users age, five properties for the users age in solar years for each planet, and four properties for the solar year equivalent to one Earth year for each planet', () => {
    expect(solarYears.userAge).toEqual(40);
    expect(solarYears.mercuryYears).toEqual(0);
    expect(solarYears.venusYears).toEqual(0);
    expect(solarYears.earthYears).toEqual(0);
    expect(solarYears.marsYears).toEqual(0);
    expect(solarYears.jupiterYears).toEqual(0);
    expect(solarYears.mercuryRate).toEqual(0.24);
    expect(solarYears.venusRate).toEqual(0.62);
    expect(solarYears.marsRate).toEqual(1.88);
    expect(solarYears.jupiterRate).toEqual(11.86);
  });
  test('should contain a method that divides the userAge property by each one of the planet rate properties, and returns their age in solar years for each of the four planets', () => {
    solarYears.calculateSolarYears();
    expect(solarYears.mercuryYears).toEqual(166.67);
    expect(solarYears.venusYears).toEqual(64.52);
    expect(solarYears.earthYears).toEqual(40);
    expect(solarYears.marsYears).toEqual(21.28);
    expect(solarYears.jupiterYears).toEqual(3.37);
  });
  // test('should contain a method that can determine how many years have passed since the users past birthday, for each planet', () => {
  //   solarYears.howManyYearsSincePastBday(40, 35);
  //   expect(solarYears.mercuryYears).toEqual(20.83);
  //   expect(solarYears.venusYears).toEqual(8.06);
  //   expect(solarYears.earthYears).toEqual(5);
  //   expect(solarYears.marsYears).toEqual(2.66);
  //   expect(solarYears.jupiterYears).toEqual(0.42);
  // });
  // test('should contain a method that can determine how many years have yet to pass until the users future birthday, for each planet', () => {
  //   solarYears.howManyYearsUntilFutureBday(50, 40);
  //   expect(solarYears.mercuryYears).toEqual(41.67);
  //   expect(solarYears.venusYears).toEqual(16.13);
  //   expect(solarYears.earthYears).toEqual(10);
  //   expect(solarYears.marsYears).toEqual(5.32);
  //   expect(solarYears.jupiterYears).toEqual(0.84);
  // });
});