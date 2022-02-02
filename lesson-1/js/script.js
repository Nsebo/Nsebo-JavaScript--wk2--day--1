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
