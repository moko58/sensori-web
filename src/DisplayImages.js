import React from 'react';
import { Card, Button } from 'react-bootstrap';

import './App.css';

function DisplayImages(props) {
  console.log(props);

  console.log('In Re2');

  return (
    <div>
      {props.images.map((item) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.uri} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
export default DisplayImages;
