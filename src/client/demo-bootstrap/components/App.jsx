import React, { useState } from 'react';
import { Container, Button, Alert, Form } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

// This is a wrapper for google.script.run that lets us use promises.
import { serverFunctions } from '../../utils/serverFunctions';

import '../styles.css';

const App = () => {
  const [showBtn, setShowBtn] = useState(true);
  const [showUrl, setShowUrl] = useState();

  const getServerUrl = () => {
    serverFunctions.getServerUrl().then(setShowUrl).catch(alert);
  };

  return (
    <Container>
      <p>
        <b>☀️ Bootstrap demo! ☀️</b>
      </p>
      <p>
        This is a sample app that uses the <code>react-bootstrap</code> library
        to help us build a simple React app.
      </p>
      {showBtn && (
        <Button
          className="border-0 mx-2"
          variant="primary"
          size="lg"
          onClick={getServerUrl}
        >
          Press Me
        </Button>
      )}
      <CSSTransition
        in={showUrl}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowBtn(false)}
        onExited={() => setShowBtn(true)}
      >
        <Alert variant="primary" dismissible onClose={() => setShowUrl('')}>
          <Alert.Heading>Animated alert message</Alert.Heading>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <p>Server URL:{showUrl}</p>
          <Button onClick={() => setShowUrl('')}>Close</Button>
        </Alert>
      </CSSTransition>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We&aposll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default App;