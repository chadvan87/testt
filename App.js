import React, {useState} from 'react';
import './App.css';
//import components
import Form from './components/Form';
import TodoList from './components/TodoList';
function App() {
  const [inputText, setInputText] = useState(""); //use state accept initial state and return current state and a function update state
  const [todos, setTodos] = useState([]); //Use array of objects
  return (
    <div className="App">
      <h1>To do List</h1>
      <Form setInputText={setInputText}
      inputText={inputText} todos={todos} setTodos={setTodos}
      /> {/*Get the func setInputText and put it in the from props*/}
      
      <TodoList setTodos={setTodos} todos={todos}/> {/*props in todos*/}
    </div>
  );
}

export default App;
