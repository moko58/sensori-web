import React from 'react';

function HelloWorld(props) {
  return (
    <div className="box">
      <h1>Hello World !</h1>
      
      <div>Selected Id is {props.itemId}</div>
    </div>
  );
}

export default HelloWorld;
