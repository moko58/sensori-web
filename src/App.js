import React, { useState } from 'react';
import './App.css';

import DisplayImages from './DisplayImages';

import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  console.log('value of isLoading', isLoading);
  if (!isLoading) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    setIsLoading(true);
    console.log('Before fetch');
    fetch('http://127.0.0.1:5000/list_of_images', requestOptions)
      .then((response) => response.text())

      .then((result) => console.log(result))

      .catch((error) => console.log('error', error))

      
      
  }

 

  return (
    <div>
      <Header />

      <br />

      <h1>images</h1>

      <div>{!isLoading ? <LoadingSpinner /> : null}</div>
      <div className="box"></div>
    </div>
  );
}

export default App;
