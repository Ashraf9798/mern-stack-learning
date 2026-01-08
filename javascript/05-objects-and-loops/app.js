// ================================
// Objects Basics
// ================================

let person = {
    name: 'Naveen',
    age: 21,
    isMale: true,
    favColor: 'Blue'
};

console.log(person);
console.log(person.name);

// ================================
// Accessing object properties
// ================================

console.log(person['age']); // bracket notation

// ================================
// Objects are reference types
// ================================

let personCopy = person;
personCopy.name = 'Gauri';

console.log(person.name);
console.log(personCopy.name);

// ================================
// Object Methods
// ================================

let marks = {
    evs: 90,
    cn: 90,
    web: 100,
    maths: 10,
    total: function () {
        return this.evs + this.cn + this.web + this.maths;
    }
};

console.log(marks.total());

// ================================
// this keyword
// ================================

let student = {
    naam: 'Sam',
    evs: 90,
    cn: 90,
    web: 100,
    maths: 10,
    totalMarks() {
        return this.evs + this.cn + this.web + this.maths;
    },
    bulao() {
        return `${this.naam} ko bulao`;
    }
};

console.log(student.totalMarks());
console.log(student.bulao());

// ================================
// Loops (nested for loop)
// ================================

for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
        if (i === j) break;
        console.log(i, j);
    }
}

// ================================
// while loop
// ================================

let num = 100;
while (num >= 0) {
    console.log(num);
    num -= 10;
}

// ================================
// for...in (objects)
// ================================

let user = {
    name: 'Sam',
    age: 27,
    isMale: true
};

for (let key in user) {
    console.log(`${key} --> ${user[key]}`);
}

// ================================
// for...of (arrays)
// ================================

let names = ['sam', 'hardik', 'akshay', 'sachin'];

for (let item of names) {
    console.log(item);
}

// ================================
// END
// ================================
