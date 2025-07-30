import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy authentication logic
        if (email === 'valid@example.com' && password === 'password') {
            localStorage.setItem('user', email);
            navigate('/');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <Card style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
            <Card.Body>
                <Card.Title>Login</Card.Title>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            data-cy="login-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            data-cy="login-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button data-cy="login-button" variant="primary" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default Login;