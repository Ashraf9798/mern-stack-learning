// ================================
// Array Basics
// ================================

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

console.log(numbers[3]);   // access index
console.log(numbers[33]);  // undefined

let mixedArray = [1, 2, 'sam', 'neha', null, true];
console.log(mixedArray);
console.log(mixedArray.length);

// ================================
// typeof with array elements
// ================================

console.log(typeof mixedArray[5]); // boolean
console.log(typeof mixedArray[2]); // string

// ================================
// Nested Arrays
// ================================

let nested = [1, 2, 'neha', [10, 20, [100]], true];
console.log(nested[3][1]);
console.log(nested[3][2][0]);

// ================================
// Array Methods (push / pop)
// ================================

let arr1 = [10, 20, 30];
arr1.push(40);
console.log(arr1);

arr1.pop();
console.log(arr1);

// ================================
// shift / unshift
// ================================

arr1.unshift(15);
console.log(arr1);

let removedFirst = arr1.shift();
console.log(removedFirst);
console.log(arr1);

// ================================
// Return values
// ================================

let popValue = arr1.pop();
console.log(popValue);

let newLength = arr1.push(50);
console.log(newLength);

// ================================
// slice (non-destructive)
// ================================

let sliceArr = [10, 20, 30, 40, 50, 60];
console.log(sliceArr.slice(2));
console.log(sliceArr.slice(2, 4));
console.log(sliceArr);

// ================================
// splice (destructive)
// ================================

let spliceArr = [10, 20, 30, 40, 50, 60];
console.log(spliceArr.splice(3));
console.log(spliceArr);

let spliceArr2 = [10,20,30,40,50,60,70,80,90,100];
console.log(spliceArr2.splice(3, 5));
console.log(spliceArr2);

// add elements using splice
spliceArr2.splice(3, 0, 'sam', 'labani');
console.log(spliceArr2);

// ================================
// concat (non-destructive)
// ================================

let nums = [10, 20, 30];
let names = ['sam', 'mohd', 'hardik'];

console.log(nums.concat(names));
console.log(names.concat(nums));

// ================================
// includes
// ================================

console.log(names.includes('mohd'));
console.log(names.includes('moh'));

let text = 'samarth';
console.log(text.includes('v'));

// ================================
// indexOf
// ================================

console.log(names.indexOf('sam'));
console.log(names.indexOf('sa'));

let word = 'vohra';
console.log(word.indexOf('v'));
console.log(word.indexOf('h'));

// ================================
// reverse (destructive)
// ================================

let revArr = ['sam', 'mohd', 'hardik'];
console.log(revArr.reverse());
console.log(revArr);

// ================================
// Arrays are reference types
// ================================

let original = [10, 20, 30];
let copy = original;

original[0] = 'sam';

console.log(original);
console.log(copy);

// ================================
// END
// ================================
