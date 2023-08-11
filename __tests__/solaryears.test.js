import { SolarYears } from '../src/js/solaryears.js';

describe('SolarYears', () => {
  let solarYears;

  beforeEach(() => {
    solarYears = new SolarYears(40);
  });

  test('should create a SolarYears object with a property for the users age, five properties for the users age in solar years for each planet, and four properties which contain each planets solar year equivalent to one Earth year', () => {
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
  test('should contain a method that returns the users age in solar years for each of the four planets', () => {
    solarYears.calculateSolarYears();
    expect(solarYears.mercuryYears).toEqual(166.67);
    expect(solarYears.venusYears).toEqual(64.52);
    expect(solarYears.earthYears).toEqual(40);
    expect(solarYears.marsYears).toEqual(21.28);
    expect(solarYears.jupiterYears).toEqual(3.37);
  });
  test('should contain a method that can determine how many years have passed between the users past birthday and their current age, and stores the result in a new property which contains how many solar years have passed for each planet', () => {
    solarYears.howManyYearsSincePastBday(35);
    expect(solarYears.mercuryYearsPast).toEqual(20.83);
    expect(solarYears.venusYearsPast).toEqual(8.06);
    expect(solarYears.earthYearsPast).toEqual(5);
    expect(solarYears.marsYearsPast).toEqual(2.66);
    expect(solarYears.jupiterYearsPast).toEqual(0.42);
  });
  test('should contain a method that can determine how many years have yet to pass between the users age and their future birthday, and stores the result in a new property which contains how many solar years have passed for each planet', () => {
    solarYears.howManyYearsUntilFutureBday(50);
    expect(solarYears.mercuryYearsFuture).toEqual(41.67);
    expect(solarYears.venusYearsFuture).toEqual(16.13);
    expect(solarYears.earthYearsFuture).toEqual(10);
    expect(solarYears.marsYearsFuture).toEqual(5.32);
    expect(solarYears.jupiterYearsFuture).toEqual(0.84);
  });
});