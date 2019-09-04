import React, { useEffect, useState } from 'react';
import { randomCoin } from '../helpers';

/**
 * This is a coin which I will draw from the chest
 * If the chest is gold, coin is gold
 * If silver, the coin is silver
 * If half, then draw a random coin between gold and silver
 * @param {name} string which takes the name of the chest
 */

function Coin({ name }) {
  if (name === 'half') {
    name = randomCoin;
  }

  // Coin is drawn or not? Default: false/not-drawn
  const [coin, drawCoin] = useState(false);

  return (
    <div className="coin-area">
      {/** The random coin */}
      {coin ? <div className={`coin ${name}-coin`}>{name}</div> : null}
      {coin ? null : (
        <button className="btn" onClick={() => drawCoin(true)}>
          Draw a coin
        </button>
      )}
    </div>
  );
}

export default Coin;
