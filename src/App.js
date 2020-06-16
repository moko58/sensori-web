import React, { useState } from 'react';
import ItemContext from './ItemContext';

import DisplayItems from './DisplayItems';

import HelloWorld from './HelloWorld';
import DisplayLocations from './DisplayLocations';

import DisplayMatch from './DisplayMatch';

import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemImages, setItemImages] = useState([]);
  const [itemLocations, setItemLocations] = useState({
    itemKey: -1,
    locationKey: -1,
    itemUri: '',
    locationUri: '',
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
  let props = {
    itemImages: itemImages,
    itemLocations: itemLocations,
  };

  let matchingImages = {
    matchingItem: '',
    matchingLocation: '',
  };

  return (
    <ItemContext.Provider value={{ itemLocations, setItemLocations }}>
      <div>
        <Header />

        <br />

       

        <div>{!isLoading ? <LoadingSpinner /> : null}</div>
        <div className="box">
          {itemLocations.itemKey === -1 && itemLocations.locationKey === -1 ? (
            <DisplayItems {...props} />
          ) : itemLocations.itemKey !== -1 &&
            itemLocations.locationKey !== -1 ? (
            <DisplayMatch images={matchingImages} />
          ) : (
            <DisplayLocations {...props} />
          )}
        </div>
        </div>
    </ItemContext.Provider>
  );
}

export default App;
