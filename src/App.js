import React, { useState } from 'react';
import ItemContext from './ItemContext';

import DisplayItems from './DisplayItems';

import HelloWorld from './HelloWorld';

import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

const myOptions = [
  {
    itemKey: 0,
    itemName: '',
    itemSelected: false,
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [itemImages, setItemImages] = useState([]);
  const [listState, setListState] = useState({
    itemKey: 0,
    itemName: '',
    itemSelected: false,
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
    <ItemContext.Provider value={listState}>
      <div>
        <Header />

        <br />

        <h1>Items</h1>

        <div>{!isLoading ? <LoadingSpinner /> : null}</div>
        <div className="box">
          <DisplayItems itemImages={itemImages} />
        </div>
        <div>
          <HelloWorld />
        </div>
      </div>
    </ItemContext.Provider>
  );
}

export default App;
