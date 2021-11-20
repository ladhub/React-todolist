import './App.css';
import { useState, useEffect } from "react";
import Loading from './components/Loading';
import TodoList from './components/TodoList';

import axios from 'axios';

function App() {
  const [todos, setTodos] = useState(null);

  useEffect(() =>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((result) => {
      setTodos(result.data);
    });
  }, []); // only fires only once when component is load
  return (
   <div>
     {todos ? <TodoList todos={todos} /> : <Loading />}
   </div>
  );
}

export default App;
