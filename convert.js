const readline = require("readline");

// Set a fixed conversion rate (Example: 1 INR = 0.012 USD)
const INR_TO_USD_RATE = 0.012;

// Create an interface for user input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to INR to USD Converter!");
console.log(`Fixed Exchange Rate: 1 INR = ${INR_TO_USD_RATE} USD`);
console.log("Type 'exit' to quit.\n");

// Function to convert INR to USD
const convertCurrency = () => {
  rl.question("Enter amount in INR: ", (input) => {
    if (input.toLowerCase() === "exit") {
      console.log("Thank you for using the currency converter. Goodbye!");
      rl.close();
      return;
    }

    // Validate input
    const amount = parseFloat(input);
    if (isNaN(amount) || amount < 0) {
      console.log("Invalid input. Please enter a valid number.\n");
      convertCurrency();
      return;
    }

    const usdAmount = (amount * INR_TO_USD_RATE).toFixed(2);
    console.log(`₹${amount} INR = $${usdAmount} USD\n`);

    // Ask again
    convertCurrency();
  });
};

// Start the conversion process
convertCurrency();
