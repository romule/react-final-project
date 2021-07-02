import './App.scss';
import React from 'react';

const axios = require('axios');

function get() {
  axios
    .get('https://abcshopuk.herokuapp.com/api/products')
    .then((products) => {
      // custom consle
      console.log(products.data);
    })
    .catch((err) => {
      // custom consle
      console.warn(err);
    });
}

get();

function App() {
  return <h1>First project</h1>;
}

export default App;
