// Stack (Primitive)

let myYouTubeName = "shubhamsargar";

let anotherName = myYouTubeName;
anotherName = "LYNX";

console.log(myYouTubeName); // shubhamsargar
console.log(anotherName);   // LYNX


// Heap (Non-Primitive)

let userOne = {
    email: "abc@gmail.com",
    upi: "user123"
};

let userTwo = userOne;

userTwo.email = "sahil123@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);