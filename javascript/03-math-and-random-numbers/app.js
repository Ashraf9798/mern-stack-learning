// ================================
// Math Constants
// ================================

console.log(Math.PI);
console.log(Math.E);
console.log(Math.LN2);

// ================================
// Math Methods
// ================================

console.log(Math.sqrt(27));
console.log(Math.min(12, 4, 5, 10, 8, 19));
console.log(Math.max(12, 4, 5, 10, 8, 19));

console.log(Math.round(10.5));
console.log(Math.ceil(10.0019));
console.log(Math.floor(10.999));

// ================================
// Random Numbers (22–27)
// ================================

// Generates numbers from 22 to 27 (inclusive)
let randomBetween22And27 = Math.floor(Math.random() * 6) + 22;
console.log(randomBetween22And27);

// ================================
// OTP Generation
// ================================

// 4-digit OTP (1000–9999)
let otp4Digit = Math.floor(Math.random() * 9000) + 1000;
console.log(otp4Digit);

// 6-digit OTP (100000–999999)
let otp6Digit = Math.floor(Math.random() * 900000) + 100000;
console.log(otp6Digit);

// ================================
// END
// ================================
