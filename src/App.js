import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import UserForm from './components/UserForm'
import './App.css';
import Banner from './components/Banner';
import { useTour } from '@reactour/tour'


function App() {

  const { setIsOpen } = useTour()
  // see https://github.com/elrumordelaluz/reactour for possible feature 
  // Documentation https://reactour.vercel.app/

  return (
    <>
      <Container fluid='sm'>
        <Banner />
        <UserForm />
        <Row fluid="sm" className="d-flex justify-content-center align-items-center">
          <Button variant="success" size="lg" style={{marginTop: "50px", width: "25%"}} onClick={() => setIsOpen(true)} >Start Tutorial</Button>
        </Row>
      </Container>
    </>
  );
}

export default App;
