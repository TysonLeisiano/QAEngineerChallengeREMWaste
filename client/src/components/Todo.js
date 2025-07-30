import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const Todo = ({ todo, removeTodo, markTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editValue.trim() !== '' && editValue !== todo.name) {
      editTodo(todo.id, editValue);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditValue(todo.name);
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <InputGroup>
          <Form.Control
            value={editValue}
            data-cy="edit-todo-input"
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus
          />
          <Button data-cy="save-btn" variant="success" onClick={handleSave}>Save</Button>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        </InputGroup>
      ) : (
        <>
          <span style={{ textDecoration: todo.status ? "line-through" : "" }}>{todo.name}</span>
          <div>
            <Button data-cy="edit-btn" id="edit" variant="outline-warning" onClick={handleEdit}>Edit</Button>
            <Button id="delete" variant="outline-danger" onClick={() => removeTodo(todo.id)}>Delete</Button>
            <Button id="done" variant="outline-primary" onClick={() => markTodo(todo.id)}>Done</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;