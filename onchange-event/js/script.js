// onchange event

// detect the selection of the select option input

const dropdown = document.querySelector("select");
const circleContainer = document.querySelector(".circles");
// selected the div with circle class

// 2. use onchange

dropdown.onchange = function (event) {
  console.log("here");
  console.log(event);
  console.log("using event target value", event.target.value);
  console.log("using this ", this.value);
  circleContainer.innerHTML = this.value;
  circleContainer.innerHTML = event.target.value;
  for (let i = 1; i <= event.target.value; i++) {
    console.log(i);
    circleContainer.innerHTML += `<li class="circle">${i}</li>`;
  }
};
