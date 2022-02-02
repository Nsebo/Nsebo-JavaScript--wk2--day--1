// The setInterval method is similar to
// setTimeout but it executes a function at
// a certain interval until it is cleared.

// setInterval(function () {
// console.log("hello i am at home");
// }, 2000);

let count = 0;
const intervalid = setInterval(function () {
  console.log("here");
  count = count + 1; // increment
  console.log(count);
  if (count === 10) {
    console.log("interval finished");
    clearInterval(intervalid);
  }
}, 1000);
// using only clearInterval won't work, so we need to assign the variable - intervalid to the function for it to work

// Example questions

// I want to add li to the ul with class
// .container li with values from 1 to 10 every 2 seconds

// 1. select the .container ul
// 2. declare a count variable
// 3. setInterval method
// 4. you need to put the time you want this interval to keep running
// 5. do the increment
// 6. create the li
// 7. add to the innerHTML of this li the count
// 8. use append to add the li to the ul

// OR >> container.innerHTML += `<li>${countSecond}</li>`

// 9. you NEED TO assign the setInterval to a variable
// 10.  you need to check if the count is > than 10 then you clear
// the interval

const container = document.querySelector(".container");
let countOne = 0;

const setintervalid = setInterval(function () {
  console.log("hello i am at home");
  // countOne++ is same as the code at line 47
  countOne = countOne + 1;
  const listItem = document.createElement("li");
  listItem.innerHTML = countOne;
  container.append(listItem);
  if (countOne === 10) {
    clearInterval(setintervalid);
  }
}, 1000);
