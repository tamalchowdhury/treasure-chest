import React, { useState } from 'react';
import './chest.css';

/**
 *
 * @param {*} props
 * Each chest will have these information and attribute about them
 * Chest name: gold/silver/50-50
 * Contents: 100 gold, 100 silver, 50/50 gold silver
 * Random coin:
 * For gold: the coin will be gold
 * For silver: the coin will be silver
 * For 50/50: it could be either gold or silver
 * States:
 * Chest: open/close
 * Coin: draw/not-drawn
 *
 */

function Chest({ name = 'gold' }) {
  // Local state
  // Chest is open or close? Default: false/close
  const [chest, openChest] = useState(false);
  // Coin is drawn or not? Default: false/not-drawn
  const [coin, drawCoin] = useState(false);

  let desc, randomCoin;
  // Set the description and random coins:
  if (name !== 'half') {
    randomCoin = name;
    desc = `100 ${name} coins`;
  } else {
    randomCoin = 'gold';
    desc = `50 gold & 50 silver coins`;
  }

  function pickRandom() {
    console.log('Picking a random coin', Date.now());
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
      return 'gold';
    } else {
      return 'silver';
    }
  }

  return (
    <div className="box-shell">
      {/** The random coin */}
      {coin ? <div className={`coin ${randomCoin}`}>{randomCoin}</div> : null}
      {coin ? null : (
        <button
          onClick={() => {
            if (name === 'half') randomCoin = pickRandom();
            drawCoin(true);
          }}>
          Draw a coin
        </button>
      )}
      <div className={`chest ${chest ? name : null}`}>
        {chest ? (
          <div>
            {name}, {randomCoin}, {desc}
          </div>
        ) : (
          <div>What's inside?</div>
        )}
      </div>
      <button onClick={() => openChest(true)}>Open Chest</button>
    </div>
  );
}

export default Chest;
