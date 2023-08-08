import { SolarYears } from '../src/js/solaryears.js';

describe('SolarYears', () => {
  let solarYears;

  beforeEach(() => {
    solarYears = new SolarYears();
  });

  test('should create a Solar Years object with four properties, with each property being a 0', () => {
    expect(solarYears.mercuryYears).toEqual(0);
    expect(solarYears.venusYears).toEqual(0);
    expect(solarYears.marsYears).toEqual(0);
    expect(solarYears.jupiterYears).toEqual(0);
  });
  test('should contain a method that takes in a users age and returns their age in solar years for each of the four above planets', () => {
    solarYears.calculateSolarYears(40);
    expect(solarYears.mercuryYears).toEqual(166.67);
    expect(solarYears.venusYears).toEqual(64.52);
    expect(solarYears.marsYears).toEqual(21.28);
    expect(solarYears.jupiterYears).toEqual(3.37);
  });
});