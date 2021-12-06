import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserForm from './components/UserForm'
import './App.css';

function App() {
  return (
    <Container fluid='lg'>
      <UserForm />
    </Container>
  );
}

export default App;
