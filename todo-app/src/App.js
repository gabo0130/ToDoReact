import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";
//import './App.css';
const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text:'Nueva', completed:false}
];
function App() {
  return (
   <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(<TodoItem key={todo.text} text={todo.text} />))}
      </TodoList>
      <CreateTodoButton />      
   </react.Fragment>
  );
}

export default App;