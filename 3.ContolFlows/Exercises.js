// Exercises
//1=== Max Number
function max(a, b) {
    return (a > b) ? a : b;
}
let number = max(23, 24);
console.log(number)



//2=== Landscape or not
function Islandscape(width, height) {
    return (width > height) ? true : false
}
let Landscapeornot = Islandscape(45, 78);
console.log(Landscapeornot)
// better way of doing this is to not write true or false ...it will take automatically
function Landscape(width, height) {
    return (width > height)
}
console.log(Landscape(45, 34))


// 3===Exercise on Fizzbuzz
function FizzBuzz(input) {
    if (typeof input !== "number")
        return NaN

    if ((input % 3 === 0) && (input % 5 === 0))
        return "FIZZBUZZ"

    if (input % 3 === 0)
        return "Fizz"

    if (input % 5 === 0)
        return "Buzz"


}
const output = FizzBuzz(false);
console.log(output);


// 4===> Exercise on Demerit points
function CheckSpeed(speed) {
    const speedLimit = 70;
    const SpeedperHour = 5;

    if (speed <= 70)
        return "Okay Speed"
    else {
        const Points = Math.floor((speed - speedLimit) / 5)
        if (Points >= 12)
            return "License Suspended"
        else {
            return ("Points ", Points)
        }
    }
}
console.log(CheckSpeed(150))


//5=> Even-Odd Exercise
function ShowNumber(limit) {
    for (i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, "EVEN")
        else console.log(i, "ODD")

    }
}
ShowNumber(10);


// 6==>Count Truthy
// Falsy =>[false,Falsy,Null,Undefined,NaN,"",0]

const array = ["const", undefined, null, 0, "hello", "yess", ''];
function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;

}
console.log(countTruthy(array));


// 7==>String Properties
const movie = { title: "a", Rating: 4.5, relesed: 2088, Director: "b" }
function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === "string")
            console.log(key, obj[key])
}
showProperties(movie);

//8==> summation of multiples
function Summation(limit) {
    let sum = 0;

    for (i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}
console.log(Summation(10));

// 9==> Grade EXercise:
const marks = [60, 60, 80]
function CalculateAverage(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let Average = sum / marks.length

    if (Average < 60) return "F";
    if (Average < 70) return "D";
    if (Average < 80) return "C";
    if (Average < 90) return "B";
    return "A"

}
console.log(CalculateAverage(marks))

// 10===>Show Stars (Not done)
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = "";
        for (i = 0; i < row; i++)
            pattern += '*';
        console.log(pattern)
    }
}
showStars(10);

// Show Primes
function ShowPrimes(limit) {

}
console.log(ShowPrimes(20))