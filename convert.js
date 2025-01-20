const readline = require('readline');

// Set the fixed exchange rate from INR to USD (for example, 1 INR = 0.012 USD)
const exchangeRate = 0.012;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function convertCurrency(inrAmount) {
  return inrAmount * exchangeRate;
}

function askQuestion() {
  rl.question('Enter the amount in INR (or type "exit" to quit): ', (answer) => {
    if (answer.toLowerCase() === 'exit') {
      console.log('Exiting the program...');
      rl.close();
    } else {
      const inrAmount = parseFloat(answer);
      
      if (isNaN(inrAmount) || inrAmount <= 0) {
        console.log('Please enter a valid amount greater than 0.\n');
      } else {
        const usdAmount = convertCurrency(inrAmount);
        console.log(`INR ${inrAmount} is equivalent to USD ${usdAmount.toFixed(2)}.\n`);
      }
      askQuestion(); // Repeat the prompt
    }
  });
}

askQuestion();
