import { useState, useEffect } from 'react'
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddToDo from './components/AddToDo';
import Todos from './components/Todos';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
      const getTodos = async () => {
          const todosFromServer = await fecthTodos();
          setTodos(todosFromServer);
      }

      getTodos();
  }, []);

  const fecthTodos = async () => {
    const res = await fetch('http://localhost:8080/get')
    const data = await res.json();
    return data.todos;
  }

  const fetchTodo = async (id) => {
    const res = await fetch(`http://localhost:8080/get/${id}`)
    const data = await res.json();
    return data.todo
  }

  const addTodo = async (todo) => {
    const res = await fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todo),
    })

    const data = await res.json();

    setTodos([...todos, data.todo])

  }

    const editTodo = async (id, newName) => {
  const oldTodo = todos.find((todo) => todo.id === id);
  const updatedTodo = {
    id,
    name: newName,
    status: oldTodo.status,
  };

  try {
    const res = await fetch(`http://localhost:8080/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });

    const responseText = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', responseText);

    if (res.status === 200) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, name: newName } : todo
        )
      );
    } else {
      alert('Error updating todo');
    }
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Error updating todo');
  }
};

  const removeTodo = async (id) => {
    const res = await fetch(`http://localhost:8080/delete/${id}`, {
      method: 'DELETE',
    });

    res.status === 200
      ? setTodos(todos.filter((todo) => todo.id !== id))
      : alert('There was an error while deleting');
  }

  const markTodo = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = { status: !todoToToggle.status }

    const res = await fetch(`http://localhost:8080/put/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });

    if(res.status === 200) {

        const data = await res.json();

        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, status: data.todo.status } : todo
          )
        )

    }

  }

  return (
  <Router>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <div className="app">
          <div className="container">
            <AddToDo addTodo={addTodo}/>
            {todos.length > 0 ? (
              <Todos
                todos={todos}
                removeTodo={removeTodo}
                markTodo={markTodo}
                editTodo={editTodo}
              />
            ) : ('No Todos To Show')}
          </div>
        </div>
      } />
    </Routes>
  </Router>
);
}

export default App;