// If Else
// Conditional statement are used to perform different actions based on different conditions.
const Amount = 40;
if (Amount >= 50) {
    return console.log("true")
} else { console.log("False") }

// Switch Case
// The SWitch Operator is used to perform different actions based on different conditions.
const Role = "Conselor";
switch (Role) {
    case "Admin":
        console.log("Hello Admin");
        break;
    case "Conselor":
        console.log("Hello Conselor")
        break;
}

// Loops ====use for repeatation
//1=> For Loop
// It requires three statement 
// for(initialExpression; Condition ; Increamemnt Expression){  Statement}
for (let i = 1; i < 10; i++) {
    if (i % 2 == 0) console.log(i)
}


// 2=> While Loop   =>Same as for loop only syntax difference is here.
// let variable ;
// While (condition){Statement, Increment/DEcrement}
let i = 0;
while (i <= 10) {
    if (i % 2 !== 0)
        console.log(i);
    i++;
}

// 3=>Do-While   {Do-While loops are always executed at once even if the contition evaluates to false} 
let l = 6;
do {
    console.log(l)
    l++;
} while (l <= 5)


// 4 => For-in
// Mostly used for Objects,arrays
// For Objects
const person = { name: "Mosh", age: "20" };
for (let key in person)
    console.log(key, person[key]);
//For Arrays
const colors = ["red", "BLue", "pink"];
for (let index in colors)
    console.log(index, colors[index])


// 5 => for-off loop(new added after ES-6 and it has access on arrays ,dont need to declare index)
const colory = ["white", "Black"];
for (let color of colory)
    console.log(color);

// Break and continue (uses for how the loops will behave)
let m = 0;
while (m <= 10) {
    if (m === 5) break;
    console.log(m)
    m++
}

