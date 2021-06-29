import './App.scss';
import React from 'react';
import Header from '../Header';

const axios = require('axios').defualt;

axios
  .get('https://abcshopuk.herokuapp.com/api/products')
  .then((products) => {
    // custom consle
    console.log(products);
  })
  .catch((err) => {
    // custom consle
    console.warn(err);
  });

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <h1>Hello final project</h1>
      </div>
    </>
  );
}

export default App;
