var a=10;
console.log(a)
function demo(){
    let b=20;
    console.log(b);
}
demo()

let user={
    FullName:"Priyam Sharma",
    address:"Delhi, India",
    mobileno:"9876543210",
    favcolor:["Red","Blue","Green"], 
}
console.log(user.address)

// console.log(user.favcolor[2]);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// Object.seal(car)
Object.seal(car)
car.model="XEVE"
car.color="Black"
console.log(car)

