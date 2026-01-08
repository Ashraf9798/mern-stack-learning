// ================================
// Function Declaration
// ================================

function addNumbers() {
    let a = 10;
    let b = 30;
    console.log(a + b);
}
addNumbers();

// ================================
// Function with Parameters
// ================================

function addWithParam(extra) {
    let a = 10;
    let b = 20;
    console.log(a + b + extra);
}
addWithParam(100);

// ================================
// Return Statement
// ================================

function getSum() {
    let a = 10;
    let b = 20;
    return a + b;
}
console.log(getSum());

// ================================
// Multiple Parameters
// ================================

function sumTwoNumbers(n1, n2) {
    return n1 + n2;
}
console.log(sumTwoNumbers(30, 40));

// ================================
// Missing Arguments
// ================================

function addMissing(n1, n2) {
    return n1 + n2;
}
console.log(addMissing(30)); // NaN

// ================================
// Default Parameters
// ================================

function addDefault(n1, n2 = 40) {
    return n1 + n2;
}
console.log(addDefault(20));
console.log(addDefault(20, 50));

// ================================
// Argument Order Matters
// ================================

function orderExample(n1 = 40, n2) {
    console.log(n1);
    console.log(n2);
}
orderExample(20);

// ================================
// Grade Calculator
// ================================

function gradeCalculator(marks) {
    if (typeof marks !== 'number') return 'Invalid Input';

    if (marks >= 80) return 'O';
    if (marks >= 60) return 'A';
    if (marks >= 40) return 'B';
    if (marks >= 20) return 'C';
    return 'Fail';
}

console.log(gradeCalculator(40));
console.log(gradeCalculator(100));
console.log(gradeCalculator('sam'));

// ================================
// Type Coercion in Functions
// ================================

function concatExample(a, b) {
    return a + b;
}

let result = concatExample(10, 'sam');
console.log(result);
console.log(typeof result);

// ================================
// Function Expression
// ================================

let greet = function () {
    return 'Hi iPhone';
};
console.log(greet());

// ================================
// Scope Example
// ================================

var x = 100;

function scopeTest() {
    var y = 99;
    console.log(y);
}

console.log(x);
scopeTest();

// ================================
// END
// ================================
