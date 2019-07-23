/**
 * pickRandom picks a random coin between gold and silver
 */

function pickRandom() {
  let random = Math.floor(Math.random() * 2);
  if (random === 1) {
    return 'gold';
  } else {
    return 'silver';
  }
}
/**
 * @param {array} array which is an array of items to be shuffled
 * A function which returns an array of random chests like:
 * ['gold', 'half', 'silver']
 * or
 * ['silve', 'gold', 'fifty']
 */
function shuffleArray(array) {
  let output = [];
  // While we still have items, keep rolling
  while (array.length) {
    // Pick one random item, fill the array, then remove that item
    // Pick a number between 0-2
    let random = Math.floor(Math.random() * array.length);
    output.push(array[random]);
    // Remove the item from the array array
    array.splice(random, 1);
  }
  return output;
}

let chests = shuffleArray(['gold', 'silver', 'half']);
let randomCoin = pickRandom();

export { chests, randomCoin, pickRandom, shuffleArray };
