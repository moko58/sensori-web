import React from 'react';

import { useContext } from 'react';
import ItemContext from './ItemContext';

import { Card  } from 'react-bootstrap';

function DisplayLocations(props) {
  const { itemLocations, setItemLocations } = useContext(ItemContext);

  console.log('Selected Item is ', itemLocations.locationKey);

  console.log(props);

  console.log('In Re2');

  function handleClick(e, id) {
    e.preventDefault();
    console.log('The link was clicked for.', id);
  }

  return (
    
    <div class="row">
       <h1>Locations</h1>
      <div class="card col-sm-6 col-lg-3 border-top-0">
        {props.itemImages
          .filter((item) => item.item_or_location === 'L')
          .map((item) => (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.uri} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{}</Card.Text>
                <button
                type="button" class="btn btn-primary"
                style={{alignSelf: "center"}}
                  variant="primary"
                  onClick={(e) => {
                    handleClick(e, item.id);
                    setItemLocations((prevState) => ({
                      ...prevState,
                      locationKey: item.id,
                      locationUri: item.uri,
                    }));
                  }}
                >
                  Where is it ?
                </button>
              </Card.Body>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default DisplayLocations;
