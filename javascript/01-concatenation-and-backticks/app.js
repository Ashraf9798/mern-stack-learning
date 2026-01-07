// Concatenation

let firstName = 'Ashraf';
let lastName = 'Ali';

// Output without space
let fullName1 = firstName + lastName;
console.log(fullName1); // AshrafAli

// Output with space (method 1)
let fullName2 = firstName + ' ' + lastName;
console.log(fullName2); // Ashraf Ali

// Output with space (method 2)
let space = ' ';
let fullName3 = firstName + space + lastName;
console.log(fullName3); // Ashraf Ali

// Single quote and escape character problem
let address1 = 'Ali\'s home';
console.log(address1);

// Using double quotes
let address2 = "Ali's home";
console.log(address2);

// Using backticks (template literals)
let address3 = `Ali's home`;
console.log(address3);

// Backticks with variables
let fullName4 = `${firstName} ${lastName}`;
console.log(fullName4);
