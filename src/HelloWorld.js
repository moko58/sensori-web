import React from 'react';

function HelloWorld(props) {
  return (
    <div className="box">
      <h1>Hello World !</h1>

      <div>Selected Item is {props.itemLocation.itemKey}</div>
      <div>Selected Location is {props.itemLocation.locationKey}</div>
    </div>
  );
}

export default HelloWorld;
