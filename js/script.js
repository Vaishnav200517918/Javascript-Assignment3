//JavaScript Code
let todoList =[]; //The main list which stores the todo items.
//Some Html Elements
const todoTitleElement = document.querySelector('.js-todo-title');
const todoDateElement = document.querySelector('.js-date')
const todoContainer = document.querySelector('.js-todo-Container')
const todoContainer2 = document.querySelector('.js-todo-Container2')


displayTodo() //Calling function for the initial display of todo items

function addTodo() { //Function to add todo into the list
  if (todoTitleElement.value.length > 30) { //Setting Maximum Character length
    alert("Todo Title too long ")
  } else if (todoTitleElement.value !== '' && todoDateElement.value !== '' ) { //Check if Title and Due date fields are not empty
    title = todoTitleElement.value;
  dueDate= todoDateElement.value;
  todoList.push({title, dueDate, done: false}) //Pushing values into the list as an object
  todoTitleElement.value = '';
  todoDateElement.value = '';
   displayTodo() //Display the list after adding new item
  } else {
    alert("Todo Title and Due Date Cannont be Empty!")
  }
}

function deleteTodo(i) { //Function to delete todo item
  todoList.splice(i,1)
  displayTodo()
}

function checkTodo(i){ // Function to manage checkbox
  const todoObject = todoList[i];
  let done = todoObject.done;
  
  if (!done) {
    todoObject.done = true
  } else if (done) {
    todoObject.done = false
  }

  displayTodo() // Display the list 

}

function clearTodo() { // Function is clear the list
  todoList =[];
  displayTodo() // Displaying the empty list

}




function displayTodo() { //Function to display the todo items
  let htmlElement = '';
  let htmlElement2 = '';

  for (let i = 0;i < todoList.length;i++) {
    const todoObject = todoList[i];
    const title = todoObject.title;
    const dueDate = todoObject.dueDate;
    const done = todoObject.done;
    if (!done) {
      htmlElement += `
      <input class="check" type='checkbox' onchange="checkTodo(${i})">
      <div class="js-title-date">${title}</div>
      <div class="js-title-date">${dueDate}</div>
      <button class= "delete-button" onclick="deleteTodo(${i})">Delete</button> 
    `; // innerHtml code

    } else if (done === true) {
      htmlElement2 += `
      <input class="check-on" type='checkbox' onchange="checkTodo(${i})">
      <div  class="js-title-date line-on">${title}</div>
      <div class="js-title-date line-on">${dueDate}</div>
      <button class= "delete-button" onclick="deleteTodo(${i})">Delete</button>
    `;// innerHtml code
    }
  }

  //implimenting innerHtml code
  todoContainer.innerHTML= htmlElement;
  todoContainer2.innerHTML = htmlElement2 
  // Code to manage the state of the checkbox
  if(document.querySelector('.check-on') !== null && document.querySelector('.check-on').checked ===false){
    let checklist = document.querySelectorAll('.check-on')
    for(let i = 0; i < checklist.length;i++){
      checklist[i].checked =true
    }

    document.querySelectorAll('.check-on').checked = true
    
  }
  
}
// Javascript Code Ends

// ---------------------------------------------------

