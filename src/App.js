import React, { useState,useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

import firebase from './firebase';

function App() {

const [gpus, setGpus] = useState([]);

useEffect(() => {
  const database = firebase.firestore();
  database
    .collection("gpus")
    .get()
    .then(snapshot => {
      const dataArray = [];
      snapshot.forEach(doc => dataArray.push({ ...doc.data(), id: doc.id }));
      setGpus(dataArray);
      console.log(dataArray);
    });
}, []);


  return (
    <div className="container">

      <Drawer/>

      <Header/>

      <main className="main">

        <section className="section__search">
          <div className="search">
            <h1 className="search__title">All GPUs</h1>
          </div>
          <div className="input__block">
            <input className="input__block-item" placeholder="Search..." />
          </div>
        </section>

        <section className="section__gpus">
          <Card 
          title="MSI - NVIDIA GeForce RTX 4090"
          price={1649}
          imageUrl="./images/gpus/4090.jpg"
          onFavorite={()=> console.log("OnFavorite")}
          onPlus={()=> console.log("OnPlus")}
          />
        </section>

      </main>
    </div>
  );
}

export default App;
