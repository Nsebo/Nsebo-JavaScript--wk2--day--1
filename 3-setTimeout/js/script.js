// The setTimeout method is used to execute a function after a specified period of time.

setTimeout(function () {
  console.log("hello i am uzo");
}, 5000);

// 1. select the class .loader
// 2. use setTimeout
// 3. change the inner html of the loading

const loading = document.querySelector(".loader");
setTimeout(function () {
  loading.innerHTML = "finished loading";
}, 5000);
