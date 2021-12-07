import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';

const UserForm = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = e.target[0].value
    window.alert(`You have been signed as ${user}`)
  }

  return (
    <Form id="user-form" onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  autoComplete="username"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type={checked ? "text" : "password"} placeholder="Password" autoComplete="current-password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Show password" onChange={() => setChecked(prev => !prev)}/>
      </Form.Group>
      <Button id="submit" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
