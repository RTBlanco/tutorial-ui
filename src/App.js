import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserForm from './components/UserForm'
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <Container fluid='sm'>
      <Banner />
      <UserForm />
    </Container>
  );
}

export default App;
