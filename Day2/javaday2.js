let fruits = ["apple", "banana"];
let newlength = fruits.push("cherry");
console.log(fruits);
console.log(newlength);

//Q1 reverse the array using push and pop method.
let arr = [1,2,3,4,5]
let rev = []
while(arr.length>0){
    rev.push(arr.pop())
}
console.log(rev)

//Q2. Remove all negative integers 
let arr = [10, -12, 3, -24, 45, -6]
let nev = []
while(arr.length>0){
    let val = arr.shift();
    if(val>0){
        nev.push(val);
    }
}
console.log(nev)

//Q3 check if palindrome or not
function palindrome(){
let arr = [1,2,4,2,1];
let original = []
let reverse = []

for(let i = 0; i<arr.length; i++) {
    original.push(arr[i]);
}

while(arr.length>0){
    reverse.push(arr.pop())
}

for(i=0;i<original.length;i++){
    if(original[i] !== reverse[i]){
        return "not a palindrome"
    }
    return "palindrome"
}
}
console.log(palindrome())

