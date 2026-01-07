// ================================
// Numbers: Safe Integers
// ================================

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// ================================
// String Indexing
// ================================

let message = 'heyy i am looking for you';

console.log(message[5]);          // space is counted
console.log(message.indexOf('a')); // first occurrence

// ================================
// Reassignment with let
// ================================

let magicNum = 10;
magicNum = 'Samarth Vohra is a web mentor';

console.log(magicNum);
console.log(magicNum[10]);

// ================================
// Undefined values
// ================================

let name1 = 'My name is Ashraf Ali';
console.log(name1[100]); // undefined

let naam;
console.log(naam); // undefined

naam = 'ali';
console.log(naam);

// ================================
// String Methods
// ================================

let text = 'My name is Ashraf Ali';

console.log(text.substr(2));
console.log(text.substr(2, 5));
console.log(text.substr(-5));

console.log(text.substring(2));
console.log(text.substring(2, 5));
console.log(text.substring(5, 2));
console.log(text.substring(0, 2));

// ================================
// indexOf practice
// ================================

let word = 'samarthisagoodboy';

let firstA = word.indexOf('a');
let secondA = word.indexOf('a', firstA + 1);
let thirdA = word.indexOf('a', secondA + 1);

console.log(firstA);
console.log(secondA);
console.log(thirdA);

// ================================
// replace / replaceAll / repeat
// ================================

let name2 = 'samarth';

console.log(name2.replace('a', 'b'));
console.log(name2.replaceAll('a', '?'));
console.log(name2.repeat(3));

console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

// ================================
// trim
// ================================

let spaced = '     samarth    ali    ';
console.log(spaced.trim());

// ================================
// Boolean comparison
// ================================

let boolValue = true;

console.log(boolValue == 1);   // true
console.log(boolValue === 1);  // false

// ================================
// split & join
// ================================

let url = 'https://www.google.com/search?q=dog+colour&oq=dog+colour';

let parts = url.split('/');
console.log(parts);

console.log(parts.join('/'));

// ================================
// END
// ================================
