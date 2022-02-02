// I have a form and my my BTN is disabled
// 1. i want to see how many chars entered the textarea

// and enable the BTN if
// the number of the chars is more than 5
// I also want to show the number of chars when i enter them

const formMessageContainer = document.querySelector("textarea");
const charsCount = document.querySelector(".character-count span");
const formSubmitBTN = document.querySelector("button");

// onkeyup

formMessageContainer.onkeyup = function (event) {
  console.log(event);
  console.log("key: ", event.key); // i can know the key
  console.log("value: ", event.target.value.length);

  const numberOfCharsEntered = event.target.value.length;
  console.log("numberOfCharsEntered: ", numberOfCharsEntered);
  charsCount.innerHTML = numberOfCharsEntered;
  console.dir(formSubmitBTN);
  if (numberOfCharsEntered >= 5) {
    formSubmitBTN.disabled = false;
  } else {
    formSubmitBTN.disabled = true;
  }
};
