// play with the length and we will use trim () methods

const animal = ["dog", "cat", "hippo"];

console.log(animal.length);

for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

// trim()

const name = " nsebo   ";
console.log("before:", name);

// trim()
const trimmedName = name.trim(); // will remove for you the space and show you a beautiful string
console.log("after:", trimmedName);
