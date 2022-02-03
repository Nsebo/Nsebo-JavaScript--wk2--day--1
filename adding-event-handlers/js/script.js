const myDivs = document.querySelectorAll(".container > div"); // > means under
console.log(myDivs);

for (i = 0; i < myDivs.length; i++) {
  // console.log(myDivs[i].dataset.price);
  // onclick

  myDivs[i].onclick = function (event) {
    console.log("price:" + event.target.dataset.price);
  };
}
