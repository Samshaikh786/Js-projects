//Operators
//1 == Arithmetic Operators
let m = 10;
let n = 2;
// Addition  +
let add = m + n;
console.log(add)
// Substraction -
let subs = (m - n);
console.log(subs);
// Multiplication *
let mult = (m * n)
console.log(mult);
// Division /
let Divi = (m / n)
console.log(Divi);
// Modulus  %
let mod = (m % 2)
console.log(mod)
// Exponential **(power)
let expo = (m ** n)
console.log(expo)
// Increament ++
let inc = (++m);
console.log(inc);
// decreament --
let dec = (--n);
console.log(dec)

//2 == Assignment Oprator
let p = 10;
++p;
// +=
p += 2;
console.log(p);
// *=
// -=
// /=
// %=

// 3 == Comparison Operator
// > greater
// >= great eqaul
// <
// <= less equal 

// 4 == Equality Operator
// === strict Check (both value and type should be sam)
// == Loose Check (only value should be equal)

// 5 == Ternary Operator (starts with Condition)
let point = 120;
let type = point > 100 ? "gold" : "silver";
console.log(type);


// Swapping the Variables
let x = "red";
let y = "blue";

let z = x;
x = y;
y = z;


console.log(x);
console.log(y);


// Spread Operator (Expand array and Object literals)
// Array
const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]
const myarray = [...array1, ...array2]
console.log(myarray)

// Object 
const person = { name: "sam", age: "22" }
const persond2 = { qualification: "Bcom" }
const allDEtails = { ...person, ...persond2 }
console.log(allDEtails);

// Rest Operator (Function to get all the parameter or may be the rest of the parameter)
function sum(...other) {
    console.log(other)
}
sum(1, 2, 3, 4, 5, 6)



