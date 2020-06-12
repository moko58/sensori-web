import React, { useState } from 'react';
import ItemContext from './ItemContext';

import DisplayItems from './DisplayItems';

import HelloWorld from './HelloWorld';

import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemImages, setItemImages] = useState([]);
  const [itemLocation, setItemLocation] = useState({
    itemKey: -1,
    locationKey: -1,
  });

  console.log('value of isLoading', isLoading);
  if (!isLoading) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    setIsLoading(true);
    console.log('Before fetch');
    fetch('http://127.0.0.1:5000/list_of_images', requestOptions)
      .then((response) => response.json())

      .then((result) => {
        console.log('results', result.data);
        setItemImages([...itemImages, ...result.data]);
        console.log('images', itemImages);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  return (
    <ItemContext.Provider value={{ itemLocation, setItemLocation }}>
      <div>
        <Header />

        <br />

        <h1>Items</h1>

        <div>{!isLoading ? <LoadingSpinner /> : null}</div>
        <div className="box">
          {itemLocation.itemKey === -1 ? (
            <DisplayItems itemImages={itemImages} />
          ) : (
            <HelloWorld itemLocation={itemLocation} />
          )}
        </div>
      </div>
    </ItemContext.Provider>
  );
}

export default App;
