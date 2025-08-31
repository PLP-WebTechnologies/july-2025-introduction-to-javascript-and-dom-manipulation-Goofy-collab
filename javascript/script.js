// Part 1: Mastering JavaScript Basics

// Variables and conditionals
let userName = "";
function askName() {
  userName = prompt("What is your name?");
  if (userName) {
    document.getElementById("greeting").textContent = "Hello, " + userName + "! Welcome to JavaScript!";
  } else {
    document.getElementById("greeting").textContent = "You didn't enter a name.";
  }
}


// Part 2: Functions

// Function 1: Calculate total
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = "The total is: " + total;
}

// Function 2: Toggle message visibility
function toggleMessage() {
  let text = document.getElementById("toggleText");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// Part 3: Loops


// Example 1: Countdown using a for loop
function showCountdown() {
  let output = "";
  for (let i = 5; i >= 1; i--) {
    output += i + " ";
  }
  document.getElementById("countdown").textContent = "Countdown: " + output;
}

// Example 2: Loop through array of fruits
function listFruits() {
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old items
  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// Part 4: DOM Manipulation


// Interaction 1: Change heading color
function changeHeading() {
  let heading = document.querySelector("h1");
  heading.style.color = heading.style.color === "red" ? "#2c3e50" : "red";
}

// Interaction 2: Add a new item dynamically
function addNewItem() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
}
