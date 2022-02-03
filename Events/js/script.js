// question 1
// what are function expression
// function assigned to a variables

const myFunctionExpression = function () {
  console.log("Hey i am here");
};

myFunctionExpression();

// question 2
// how to detect an event on a button

//1. select the button with class .btn
// const button = document.querySelector(".btn");

//1. is to use a function expression : function expression is a function assigned to a value
// const handleClick = function () {
//   console.log("I clicked the BTN");
// };

//2. is to use addEventListener
// button.addEventListener("click", handleClick);

// // way 2
// button.onclick = function () {
//   console.log("I clicked the btn second");
// };

// button.onclick = function (event) {
//   console.log(event.target.value);
// };

// button.onclick = function () {
//   console.log(this);
// };

// Question 3 key press
//
// The onKeyDown event is triggered when the user presses a key.
// The onKeyUp event is triggered when the user releases a key.
// The onKeyPress event
// is triggered when the user presses & releases
// a key (onKeyDown followed by onKeyUp).
// not used anymore

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress = function (event) {
  console.log("A key is pressed");
  console.log(event);
  console.log(event.target);
};
myFirstNameInput.addEventListener("keydown", handleKeyPress);

// Question 4 play with mouseover(to detect hovering)

//const theHoverBtn = document.querySelector(".pet-btn");

//const handleMouseOver = function () {
// theHoverBtn.classList.add("hover");
//console.log(event.target.dataset.animal);
// };
// theHoverBtn.addEventListener("mouseover", handleMouseOver);

// Question 5 play with mouseout

//const handleMouseOut = function () {
// theHoverBtn.classList.remove("hover");
//};
// theHoverBtn.addEventListener("mouseout", handleMouseOut);

// question 6 select all the li
// on mouse over show the dataset of animal they have

// select all the li
// loop on the li's
// create my function expression which console log for me the
// event.target.dataset.animal
// add the event listener

const listItems = document.querySelectorAll("li");
console.log(listItems);

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", hoverListItem);
}
function hoverListItem(event) {
  console.log(event.target.dataset.animal);
}

// question 8
const word = "Noroff";
let count = 1;
function logMyWord() {
  if (count === 5) {
    clearInterval(wordTimer);
  }
  console.log(count + " " + word);
  count = count + 1;
}

let wordTimer = setInterval(logMyWord, 1000);

// question 9  play with setTimeout
// select the element

const containerDiv = document.querySelector(".container");

function updatedDivAfterTwoSeconds() {
  containerDiv.innerHTML = "Hello i am updated";
}
setTimeout(updatedDivAfterTwoSeconds, 2000);

// const animal = "elephant";

// switch (animal) {
// case 1
// case 2
// case 3
// case 4

//   case "cat":
//     console.log("meow meow");
//     break;
//   case "cow":
//     console.log("moo");
//     break;
//   case "bird":
//     console.log("tweet");
//     break;
//   default:
//     console.log("this animal doesn't have a sound");
// }
