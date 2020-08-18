import React from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'


const Staking = ({ address, balance }) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Staking test</Form.Label>
          <Form.Control type="email" placeholder={"test"} />
        </Form.Group>
          <Button variant="primary" type="submit">Staking</Button>
          <Button variant="warning" type="submit">Unstaking</Button>
      </Form>
    </div>
  );
};

export default Staking;
