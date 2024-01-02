window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }  // END if...
});  // END addEventListener

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value)
} // END return
}  // END getCurrentUIValues()

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").setAttribute("placeholder", '1,000,000');
  document.getElementById("loan-years").setAttribute("placeholder", '30');
  document.getElementById("loan-rate").setAttribute("placeholder", '5.5');
}  // END setupInitialValues()

// Get the current values from the UI
// Update the monthly payment
function update() {
  const monthlyPayment = calculateMonthlyPayment(getCurrentUIValues());
  updateMonthly(monthlyPayment);
}  // END update()

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  console.log(values);
    const monthlyRate = ((values.rate/100) / 12);
    const totalMonths = values.years * 12;
    const monthlyPayment = (values.amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
    console.log(monthlyPayment);
  return monthlyPayment.toFixed(2);
}  // END calculateMonthlyPayment

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(`Monthly Payment is: ${monthly}`);
  document.getElementById('monthly-payment').innerText = `$${monthly}`;
}  // END updateMonthly
