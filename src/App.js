import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import DisplayImages from './DisplayImages';

import Header from './Header';
import LoadingSpinner from './LoadingSpinner';

function App() {
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  let status = postImagesData(`http://127.0.0.1:5000/list_of_images`, {});

  if (status === null) alert('Axios error. Please contact admin !!');
  setIsLoading(false);

  async function postImagesData(url = '', data = {}) {
    await axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.data);
        const tempResults = res.data.data;
        console.log(tempResults.length);
        console.log(tempResults);
        setImages([...images, ...res.data.data]);
        const x = typeof responses;
        console.log('TypeOfResponse', x);
        console.log('RESPONSES ', images);
        console.log('RESPONSES ', images);
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

  return (
    <div>
      <Header />

      <br />

      <h1>images</h1>

      <div>{!isLoading ? <LoadingSpinner /> : null}</div>
      <div className="box">
        <DisplayImages images={images} />
      </div>
    </div>
  );
}

export default App;
