import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo, editTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <Card key={todo.id}>
          <Card.Body>
            <Todo
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default Todos
