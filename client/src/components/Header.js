import { Navbar, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <div>
            <Navbar bg="light">
                <Container className="justify-content-between">
                    <Navbar.Brand>Todo List With REST API</Navbar.Brand>
                    <Button variant="outline-primary" onClick={handleLogin}>
                        Login
                    </Button>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header