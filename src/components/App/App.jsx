import React, { useState, Fragment } from 'react';
import Chest from '../Chest/Chest';
import Coin from '../Coin/Coin';
import { chests } from '../helpers';
import { connect } from 'react-redux';
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

function App({ info }) {
  /**
   * A function which returns an array of random chests like:
   * ['gold', 'half', 'silver']
   * or
   * ['silve', 'gold', 'fifty']
   */

  return (
    <div className="app">
      <div className="info">
        You are presented with 3 treasure chests.
        <p>One of them contains 100 gold coins,</p>
        <p>one contains 100 silver coins,</p>
        <p>the last one contains 50 silver and 50 gold coins.</p>
        <p>
          You can draw one coin from the chest before you decide. Can you pick
          the chest with 100 gold coins?
        </p>
      </div>
      <div className="header">
        <h2>
          {info.foundChest ? (
            <span>You found {info.desc}</span>
          ) : (
            'Pick a chest'
          )}
        </h2>
      </div>
      <div className="chest-area">
        {chests.map((name, index) => {
          return (
            <div key={index}>
              <Coin name={name} />
              <Chest name={name} />
            </div>
          );
        })}
      </div>
      {info.foundChest ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <button onClick={() => window.location.reload()}>Retry?</button>
        </div>
      ) : null}
    </div>
  );
}

function mapStateToProps(state) {
  return { info: state.info };
}

export default connect(mapStateToProps)(App);
