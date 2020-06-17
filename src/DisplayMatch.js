import React from 'react';

import { useContext } from 'react';
import ItemContext from './ItemContext';

import { Card } from 'react-bootstrap';

function DisplayMatch(props) {
  const { itemLocations, setItemLocations } = useContext(ItemContext);

  console.log('Selected Item is ', itemLocations.locationKey);
  console.log('Prop item is ', itemLocations.itemUri);
  console.log('Prop location is ', itemLocations.locationUri);

  console.log(props);

  console.log('In Re2');

  return (
    <div>
       <h1>Matched !!</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={itemLocations.itemUri} />
        <Card.Body>
          <Card.Title>{itemLocations.itemName}</Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={itemLocations.locationUri} />
        <Card.Body>
          <Card.Title>{itemLocations.locationName}</Card.Title>
          <Card.Text>{}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DisplayMatch;
