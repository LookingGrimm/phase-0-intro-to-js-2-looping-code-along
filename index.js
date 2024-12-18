// Code your solutions in this file
// Importing helpers.js if needed (as per the test setup, but it's not explicitly required here).
// require('./helpers.js'); 

// Function to create thank you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function to count down to zero, logging each number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number to count down
    }
  }
  
  // Export the functions if you're using CommonJS modules
  // module.exports = { writeCards, countDown };
  
  // Or use ES6 export syntax:
  // export { writeCards, countDown };
  