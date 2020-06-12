import React from 'react';

import { useContext } from 'react';
import ItemContext from './ItemContext';

import { Card, Button } from 'react-bootstrap';

function DisplayItems(props) {
  const { itemLocation, setItemLocation } = useContext(ItemContext);

  console.log('Selected Item is ', itemLocation.itemKey);

  console.log(props);

  console.log('In Re2');

  function handleClick(e, id) {
    e.preventDefault();
    console.log('The link was clicked for.', id);
  }

  return (
    <div>
      {props.itemImages
        .filter((item) => item.item_or_location === 'I')
        .map((item) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.uri} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Button
                variant="primary"
                onClick={(e) => {
                  handleClick(e, item.id);

                  setItemLocation((prevState) => ({
                    ...prevState,
                    itemKey: item.id,
                  }));
                }}
              >
                Where is it ?
              </Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default DisplayItems;
