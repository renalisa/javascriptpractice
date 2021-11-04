//Make two variables called first and last, then log them out together as your name//
//make first variabe
let first = "Renata";
//make last variable
let last = "Schmidt";

//Log them out, but needs to be a space between them
console.log(first + " " + last);

//Log same thing out whenever a person clicks a button on the page

//Get behavior, wire it up
//make a variable for the button (GET)
var button = document.querySelector("button.thisone");

//Define a function
function logName() {
  console.log(first + " " + last);
}
//attaach function to click on button
button.addEventListener("click", appendName);

//Whenever clicks the button, add a paragraph to the page that has your name

function appendName() {
  //create p element
  let p = document.createElement("p");

  //put text incisde the p element
  p.innerText = first + " " + last;

  //append the p element as a child of the pages body
  document.body.appendChild(p);
  //attach to button
}

//Make array of three favorite hobbies
let hobbies = ["Reading", "Working out", "petting dogs"];

let ul = document.createElement("ul");
//Loop through the array and log each item using console.log()
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
  let li = document.createElement("li");
  li.innerText = hobbies[i];
  ul.appendChild(li);
}
document.body.appendChild(ul);
