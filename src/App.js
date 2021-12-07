import './App.css';
import Logo from './Logo.png'
import { useTour } from '@reactour/tour'
import UserForm from './components/UserForm'
import { Container, Row, Button, Image } from 'react-bootstrap';


function App() {

  const { setIsOpen } = useTour()
  // see https://github.com/elrumordelaluz/reactour for possible feature 
  // Documentation https://reactour.vercel.app/

  return (
    <>
      <Container fluid='sm'>
        <Image id="banner" src={Logo} className="mx-auto d-block" fluid/>
        <UserForm />
        <Row fluid="sm" className="d-flex justify-content-center align-items-center">
          <Button variant="primary" size="lg" style={{marginTop: "50px"}} onClick={() => setIsOpen(true)} >Start Tutorial</Button>
        </Row>
      </Container>
    </>
  );
}

export default App;
