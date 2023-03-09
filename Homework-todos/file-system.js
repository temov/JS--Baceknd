import fs from 'fs';

// Read the  todos.json 
const readTodos = () => {
  const todos = JSON.parse(fs.readFileSync('./db/todos.json',{encoding:'utf-8'}));
  return todos;
};

// Write the todos array to  todos.json 
const writeTodos = (todos) => {
  fs.writeFileSync('./db/todos.json', JSON.stringify(todos));
};

// Function to delete a todo by its id
const deleteTodo = (id) => {
  const todos = readTodos();
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  if (filteredTodos.length < todos.length) {
    writeTodos(filteredTodos);
    return true;
  } else {
    return false;
  }
};

// Read a todo by id
const readTodo = (id) => {
  const todos = readTodos();
  const todo = todos.find((todo) => todo.id === id);
 if(todo){
    return todo
 }else{
    return null
 }
};

// Mark a todo as done/finished
const doneTodo = (id) => {
  const todos = readTodos();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index > -1) {
    todos[index].done = true;
    writeTodos(todos);
    return true;
  } else {
    return false;
  }
};

deleteTodo(2);
doneTodo(2);



