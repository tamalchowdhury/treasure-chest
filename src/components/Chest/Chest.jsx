import React, { useState } from 'react';
import './chest.css';
import { connect } from 'react-redux';

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

function Chest({ info, name, dispatch }) {
  // Local state
  // Chest is open or close? Default: false/close
  const [chest, openChest] = useState(false);

  let desc;
  // Set the description and random coins:
  if (name !== 'half') {
    desc = `100 ${name} coins`;
  } else {
    desc = `50 gold & 50 silver coins`;
  }

  return (
    <div className="box-shell">
      <div className={`chest ${chest ? name : ''}`} />

      <button
        className="btn"
        disabled={info.foundChest ? true : false}
        onClick={() => {
          dispatch({ type: 'PICK_CHEST', name, desc });
          openChest(true);
        }}>
        Pick Chest
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { info: state.info };
}

export default connect(mapStateToProps)(Chest);
