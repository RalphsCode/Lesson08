// Function to check if a string representing a number contains two decimal numbers
function hasTwoDecimals(inputString) {
    const decimalRegex = /\.\d+\.\d+/;
    return decimalRegex.test(inputString);
  }
  
  // Export the function for testing
  window.hasTwoDecimals = hasTwoDecimals;
  