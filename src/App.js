import React from 'react';
import axios from 'axios';

import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
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
          <Card/>
        </section>

      </main>
    </div>
  );
}

export default App;
