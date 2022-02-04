const div = document.querySelector("div");
const form = document.querySelector("form");
const button = document.querySelector("button");

div.onclick = function () {
  console.log(event.target);
  console.log(this);

  document.bgColor = "yellow";
};

form.onclick = function () {
  event.stopPropagation();

  document.bgColor = "blue";
};

button.onclick = function () {
  event.stopPropagation();

  document.bgColor = "grey";
};
