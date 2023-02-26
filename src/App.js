import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

import firebase from './firebase';

function App() {

  const [gpus, setGpus] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  useEffect(() => {
    const database = firebase.firestore();
    database
      .collection("gpus")
      .get()
      .then(snapshot => {
        const dataArray = [];
        snapshot.forEach(doc => dataArray.push({ ...doc.data(), id: doc.id }));
        setGpus(dataArray);
      });
  }, []);



  return (
    <div className="container">

      {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

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
          {gpus.map((gpu) => (
            <Card
              key={gpu.id}
              title={gpu.title}
              price={gpu.price}
              imageUrl={gpu.imageUrl}
              onFavorite={() => console.log("OnFavorite")}
              onPlus={() => console.log("OnPlus")}
            />
          ))}
        </section>

      </main>
    </div>
  );
}

export default App;
