import { SolarYears } from '../src/js/solaryears.js';

describe('SolarYears', () => {
  let solarYears;

  beforeEach(() => {
    solarYears = new SolarYears();
  });

  test('should create a Solar Years object with five properties, with each property being a 0', () => {
    expect(solarYears.mercuryYears).toEqual(0);
    expect(solarYears.venusYears).toEqual(0);
    expect(solarYears.earthYears).toEqual(0);
    expect(solarYears.marsYears).toEqual(0);
    expect(solarYears.jupiterYears).toEqual(0);
  });
  test('should contain a method that takes in a users age and returns their age in solar years for each of the four above planets', () => {
    solarYears.calculateSolarYears(40);
    expect(solarYears.mercuryYears).toEqual(166.67);
    expect(solarYears.venusYears).toEqual(64.52);
    expect(solarYears.earthYears).toEqual(40);
    expect(solarYears.marsYears).toEqual(21.28);
    expect(solarYears.jupiterYears).toEqual(3.37);
  });
  test('should contain a method that can determine how many years have passed since the users past birthday, for each planet', () => {
    solarYears.howManyYearsSincePastBday(40, 35);
    expect(solarYears.mercuryYears).toEqual(20.83);
    expect(solarYears.venusYears).toEqual(8.06);
    expect(solarYears.earthYears).toEqual(5);
    expect(solarYears.marsYears).toEqual(2.66);
    expect(solarYears.jupiterYears).toEqual(0.42);
  });
  test('should contain a method that can determine how many years have yet to pass until the users future birthday, for each planet', () => {
    solarYears.howManyYearsUntilFutureBday(50, 40);
    expect(solarYears.mercuryYears).toEqual(41.67);
    expect(solarYears.venusYears).toEqual(16.13);
    expect(solarYears.earthYears).toEqual(10);
    expect(solarYears.marsYears).toEqual(5.32);
    expect(solarYears.jupiterYears).toEqual(0.84);
  });
});