// =====================
// JavaScript Scope & Hoisting
// =====================


// ---------------------
// Case 1: Normal execution
// ---------------------
var a = 20;
function meraFunc() {
    console.log('inside mera function');
}
console.log(a);
meraFunc();


// ---------------------
// Case 2: Hoisting with var and function
// ---------------------
console.log(a);
meraFunc();

function meraFunc(){
    console.log('inside mera function');
}
var a = 20;


// ---------------------
// Output Question 1
// ---------------------
var a = 10;
sam();

function sam(){
    console.log(a);
    console.log('inner function');
}

console.log(a);


// ---------------------
// Output Question 2 (TDZ example)
// ---------------------
console.log(a);
sam();

function sam() {
    console.log(a);
    console.log('inside mera function');
}

let a = 10; // ReferenceError due to TDZ


// ---------------------
// Dry-run / Debugging
// ---------------------
console.log(a);
var a = 10;

function fun(){
    var b = 100;

    function fun2(){
        console.log(a);
        console.log(b);
    }
    fun2();
}
fun();


// ---------------------
// Block scope example
// ---------------------
let score = 50;
if(score > 33){
    let x = 20;
}
console.log(x); // ReferenceError


// ---------------------
// Block scope shadowing
// ---------------------
let x = 10;
{
    let x = 20;
    console.log(x);
}
console.log(x);


// ---------------------
// Closure example
// ---------------------
var a = 10;
function f1() {
    console.log('hi');
    function fun2() {
        console.log(a);
    }
    fun2();
}
console.log(a);
f1();


// =====================
// END
// =====================
