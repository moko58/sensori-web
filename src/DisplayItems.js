import React, { useState } from 'react';

import { useContext } from 'react';
import ItemContext from './ItemContext';

import { Card, Button } from 'react-bootstrap';

import HelloWorld from './HelloWorld';

function DisplayItems(props) {
  const { selectedItemId, setSelectedItemId } = useContext(ItemContext);

  console.log('Selected Item is ', selectedItemId);

  console.log(props);
  const [isClicked, setIsClicked] = useState(false);
  console.log('In Re2');

  function handleClick(e, id) {
    e.preventDefault();
    console.log('The link was clicked for.', id);
  }

  return (
    <div>
      {props.itemImages.map((item) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.uri} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button
              variant="primary"
              onClick={(e) => {
                handleClick(e, item.id);
                setSelectedItemId(item.id);
              }}
            >
              Where is it ?
            </Button>
          </Card.Body>
        </Card>
      ))}
      {isClicked ? <HelloWorld /> : null}
    </div>
  );
}

export default DisplayItems;
