// ------------------HOSTING--------------------------------------------------//
a = "hello world"
console.log(a);
var a;
//output: hello world

// ------------------ARRAY METHODS--------------------------------------------------//
//Q1.Take an array with length 10 and put 10 differnt student marks in between 0 to 40 and check which values is pass or fail. 
// (pass marks = 16 and fail < 16)
 let marks = [10,20,30, 4, 15, 25, 35, 12, 8, 18];
let passed = marks.filter((mark) => {
if (mark >= 16) {
console.log(mark, " is passed");
} else {
console.log(mark, " is failed");
}
});
let failed = marks.filter((mark) => mark < 16);

//Q2.printing passed and failed students using for loop
for (let i = 0; i < passed.length; i++) {
console.log(passed[i], " is passed");
for (let j = 0; j < failed.length; j++) {
console.log(failed[j], " is failed");
}
}

// ------------------SUM OF ALL ELEMENTS IN AN ARRAY------------------------//
//Q3.find the sum of all the elements inside an array with for loop.
let av= [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i <av.length;i++){
    sum += av[i];
}
console.log("The sum of all the elements in the array is: ", sum);

// --------------SUM OF ALL ELEMENTS IN AN ARRAY USING REDUCE METHOD---------------------------//
//Q4.find the sum of all the elements inside an array with reduce method.
let num = [1,2,3,4,5];
let sum1= num.reduce((acc, val) => acc + val, 0);//acc is accumulator which will store the first value of the array and sum after iteration.
console.log("The sum of all the elements in the array is: ", sum1);

// ------------------CHECKING FOR EVEN AND ODD NUMBERS IN AN ARRAY USING SOME() AND EVERY() METHOD--------------------------------------------------//
let numbers = [1,2,3,4,5,6,8,10];
let isEven = numbers.some((num) => num % 2 === 0);
console.log("Are all numbers even? ", isEven);

let isOdd = numbers.every((num) => num % 2 !== 0);
console.log("Are all numbers odd? ", isOdd);