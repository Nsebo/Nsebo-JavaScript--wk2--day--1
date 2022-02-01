// // These are often called callbacks. It is very common
// // to pass functions as arguments to other ***
// // functions and have the receiving function execute them.
//
//
// // Normal way of creating a function - immediately invoked function expression and we have to call it for it to show

function showMeMessage() {
  console.log("hello Uzo");
}

showMeMessage();

// the other type of function - instantly invoked function expression :  we do not need to call the function and name it because this function will call itself

(function doSomething() {
  console.log("hello Nsebo");
})();

// Hoisting : one can call the function before creating the function

doSomething(); // this will work

function doSomething() {
  console.log("cey");
}

// Anonymous

// doSomething(); // it will display error this practice won't work
// const doSomething = function () {
//  console.log("lol");
// };

// callback functions : is a function passed into another function as an argument

function logTheArgument(someFunction) {
  console.log(someFunction);
}

logTheArgument(function () {
  console.log("i am callback function");
});

// more examples on functions

function logTheType(someArgument) {
  console.log(typeof someArgument);
}
logTheType("Cecilia"); // string
logTheType(122222); // number

const obj = {};

logTheType(obj); // object

const someArray = [];

logTheType(someArray); // object

function justSomeFunction() {
  console.log("hello i am happy function");
}

logTheType(justSomeFunction); // function

const justAHappyFunction = function () {
  console.log("i am happy function");
};

logTheType(justAHappyFunction); // function

// // 1. create two functions one is normal function
// // and the other is a
// // function which calls itself

function sendMeMoney() {
  console.log("money");
}
sendMeMoney();

(function receivedMoney() {
  console.log("money received");
})();

//

// Hoisting
// a. call a function then create it
sendMeMoney(); // works

function sendMeMoney() {
  console.log("ego");
}

// b. call an Anonymous function then you create it

// sendMoney(); // it won't work
// const sendMoney = function () {
//   console.log("hello i am anonymous function");
// };
