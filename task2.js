/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = "Jorge Mejorada";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
const one = document.querySelector("#name");
one.innerHTML = name;

// Step 3: declare and instantiate a variable to hold the current year
let year = "2023";

// Step 4: place the value of the current year variable into the HTML file
const two = document.querySelector("#year");
two.innerHTML = year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let pict = "Picture";

// Step 6: copy your image into the "images" folder
// DONE

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
const three = document.querySelector("#img").src = "images/placeholder.png.jpeg ";

// ARRAYS 

// Step 1: declare and instantiate an array variable to hold your favorite foods
let favFood = ["Fried Chicken, Pizza, Lasagna"];
var foodItems = favFood[0].split(" ,");

// Step 2: place the values of the favorite foods variable into the HTML file
const four = document.querySelector("#food");
four.innerHTML = foodItems;

// Step 3: declare and instantiate a variable to hold another favorite food
let favFood1 = "French Fries";

// Step 4: add the variable holding another favorite food to the favorite food array
favFood.push(favFood1);

// Step 5: repeat Step 2
const seven = document.querySelector("#food");
seven.innerHTML = favFood;

// Step 6: remove the first element in the favorite foods array
let eight = favFood.shift();
const nine = document.querySelector("#food");
nine.innerHTML = favFood;

// Step 7: repeat Step 2
const ten = document.querySelector("#food");
ten.innerHTML = favFood;

// Step 8: remove the last element in the favorite foods array
let lastFood = favFood.pop();
const eleven = document.querySelector("#food");
eleven.innerHTML = favFood;

// Step 9: repeat Step 2
const twelve = document.querySelector("#food");
twelve.innerHTML = foodItems;
