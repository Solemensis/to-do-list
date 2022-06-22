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

    //a temporary solution for long toDos
    document.querySelector(".container").style.minWidth = `${
      toDo.clientWidth + 100
    }px`;
  }

  //a great potantial solution for long toDos (put into media queries)
  // if(toDo.clientWidth > 487){
  // }

  //to erase the html text input field value after putting the previous one
  textInput.value = "";

  //line-through click event setup
  toDo.addEventListener("click", function () {
    this.style.textDecoration = "line-through";
    this.style.textDecorationThickness = "2px";
    this.style.textDecorationColor = "rgb(243, 12, 12)";

    //remove list item click event setup
    toDo.addEventListener("click", function () {
      this.remove();
    });
  });
});
