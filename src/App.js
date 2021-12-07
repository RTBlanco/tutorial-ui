import { Container, Row, Button } from 'react-bootstrap';
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
          <Button variant="primary" size="lg" style={{marginTop: "50px"}} onClick={() => setIsOpen(true)} >Start Tutorial</Button>
        </Row>
      </Container>
    </>
  );
}

export default App;
