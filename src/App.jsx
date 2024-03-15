import { useEffect, useState } from 'react';
import { TodoList } from './components/TodoList/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoFooter } from './components/TodoFooter/TodoFooter';
import './App.css';

const todoLists = [{
  id: Math.random(),
  text: "Learn JS",
  isCompleted: false
},
{
  id: Math.random(),
  text: "Learn CSS",
  isCompleted: false
},
{
  id: Math.random(),
  text: "Learn React",
  isCompleted: false
}];

function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todo")) || todoLists || []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <h1 className='todoAppTitle'>Todo List</h1>
      <TodoForm onAdd={(text) => {
        setTodos([
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          },
          ...todos
        ])
      }} />
      <TodoList
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        }}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}

      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted));
        }}
      />
    </div>
  );
}

export default App;
