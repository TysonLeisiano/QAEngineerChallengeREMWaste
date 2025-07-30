const express = require('express');
const { body } = require('express-validator');
const crudController = require('../controllers/crud');

const router = express.Router();

router.get('/get', crudController.getAllTodos);

router.get('/get/:tid', crudController.getSingleTodo);

router.post('/post', [
    body('name',"Provide a valid name")
        .isLength({ min: 2})
        .trim(),
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.postTodo);

router.put('/put/:tid', [
    body('status', "Provide a valid status")
        .isBoolean()
], crudController.putTodo);

router.delete('/delete/:tid', crudController.deleteTodo);

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulate valid login
  if (username === 'admin' && password === 'password123') {
    return res.status(200).json({ message: 'Login successful', token: 'mock-token' });
  }

  // Simulate failed login
  return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;