"use strict";

//matching variables with html elements to manipulate them easier
const addButton = document.querySelector(".add");
const textInput = document.querySelector(".textInput");
const toDoContainer = document.querySelector(".toDos");

//setup click event on addButton
addButton.addEventListener("click", function () {
  //create list element upon click on addButton
  let toDo = document.createElement("li");

  //let textInput.value be our new list item's textContent
  toDo.textContent = textInput.value;

  //if statement for just not to create empty list items
  if (textInput.value) {
    //make our toDo list item an appendChild of toDoContainer in html dom
    toDoContainer.appendChild(toDo);
  }

  //to erase the html text input field value
  textInput.value = "";

  //line-through click event setup
  toDo.addEventListener("click", function () {
    this.style.textDecoration = "line-through";
    this.style.textDecorationThickness = "2px";
    this.style.textDecorationColor = "black";

    //remove list item click event setup
    toDo.addEventListener("click", function () {
      this.remove();
    });
  });
});
