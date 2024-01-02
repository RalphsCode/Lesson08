// Jasmine tests for Loan Calculator

describe('testing calculateMonthlyPayment function', function() {

  it('should return the monthly rate as a string', function () {
    expect(calculateMonthlyPayment({amount: 1000000,years: 30,rate:5})).toBeInstanceOf(String);
    }) // END it

  it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 1000000,years: 30,rate:5})).toEqual('5368.22');
  }) // END it

  it("should return a result with 2 decimal places", function() {
  expect(() =>  hasTwoDecimals((calculateMonthlyPayment({amount: 1000000,years: 30,rate:5})))).toBeTruthy();    
  })  // END it

}) // END Describe

