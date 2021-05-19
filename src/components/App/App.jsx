import React, { useState } from 'react';
import classes from './App.module.scss';
import Cities from '../Cities/Cities';
import CityStorage from '../CityStorage/CityStorage';
import Storage from '../Storage/Storage';
import Transportations from '../Transportaition/Transportaition';

function App() {
  const [currentCity, setCurrentCity] = useState(1);

  const [storages, setStorage] = useState([
    {
      id: 1,
      storage: [{
        id: 1,
        qty: 10
      }]
    },

  ]);

  return (
    <div className={classes.App}>
      <h1 className={classes.title}>Profiteer</h1>
      <Cities
        currentCity={currentCity}
        onChange={(city) => {
          setCurrentCity(city);
        }}
      />
      <div className={classes.content}>
        <div className={classes.column}>
          <div className={classes.storage}>
            <Storage />
          </div>
          <div className={classes.transportations}>
            <Transportations />
          </div>
        </div>

        <div className={classes.column}>
          <div className={classes['city-storage']}>
            <CityStorage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
