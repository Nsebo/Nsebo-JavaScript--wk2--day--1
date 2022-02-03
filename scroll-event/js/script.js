// select nav

const nav = document.querySelector("nav");

// yaay

function handleScroll() {
  // console.log(window);
  // want to add the class scrolled when i scroll 50px or
  console.log(window);

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// console.log(window);
// window.onscroll = handleScroll;

window.addEventListener("scroll", handleScroll);
