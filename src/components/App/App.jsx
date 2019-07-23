import React, { useState } from 'react';
import Chest from '../Chest/Chest';
import './app.css';

/**
 *
 * @param {*} props
 * Load the app,
 * Randomly pick the contents of the boxes
 * 1 box will have 100 gold
 * 1 box will have 100 silver
 * 1 box will have 50 gold/50 silver
 * Render 3 boxes and the buttons to pick
 *
 */

function App(props) {
  /**
   * A function which returns an array of random chests like:
   * ['gold', 'half', 'silver']
   * or
   * ['silve', 'gold', 'fifty']
   */
  function getRandomChests() {
    let options = ['gold', 'silver', 'half'];
    let output = [];
    // While we still have items, keep rolling
    while (options.length) {
      // Pick one random item, fill the array, then remove that item
      // Pick a number between 0-2
      let random = Math.floor(Math.random() * options.length);
      output.push(options[random]);
      // Remove the item from the options array
      options.splice(random, 1);
    }
    return output;
  }

  let chests = getRandomChests();

  return (
    <div className="app">
      {chests.map((name, index) => {
        return <Chest name={name} key={index} />;
      })}
    </div>
  );
}

export default App;
