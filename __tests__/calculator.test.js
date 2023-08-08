import { Calculator } from './../src/js/calculator.js';

describe('Calculator', () => {
  let reusableCalculator;

  beforeEach(() => {
    reusableCalculator = new Calculator();
  });

  test('should create a calculator object with four properties, with each property being a 0', () => {
    expect(reusableCalculator.mercuryYears).toEqual(0);
    expect(reusableCalculator.venusYears).toEqual(0);
    expect(reusableCalculator.marsYears).toEqual(0);
    expect(reusableCalculator.jupiterYears).toEqual(0);
  });
});