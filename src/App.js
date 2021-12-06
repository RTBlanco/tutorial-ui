import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserForm from './components/UserForm'
import './App.css';
import Banner from './components/Banner';
import {useState} from 'react'
import Overlay from './components/Overlay';

function App() {
  const [active, setActive] = useState(false)

  const toggleOverlay = () => {
    setActive(prev => !prev)
  }

  return (
    <>
      {active ? <Overlay toggleOverlay={toggleOverlay}/> : ''}
      <Container fluid='sm'>
        <Banner />
        <UserForm />
        <Row fluid="sm" className="d-flex justify-content-center align-items-center">
          <Button variant="success" size="lg" style={{marginTop: "50px", width: "25%"}} onClick={toggleOverlay} >Start Tutorial</Button>
        </Row>
      </Container>
    </>
  );
}

export default App;
