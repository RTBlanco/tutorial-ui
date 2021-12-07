import {Form, Button} from 'react-bootstrap';
import { useState } from 'react';

const UserForm = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Form id="user-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control id="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control id="password" type={checked ? "text" : "password"} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check id="checkbox" type="checkbox" label="Show password" onChange={() => setChecked(prev => !prev)}/>
      </Form.Group>
      <Button id="submit" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UserForm;
