/**
 * Game info reducer
 * Tells the user the result of the game and then locks the chests from opening.
 */

function info(state = { foundChest: false }, action) {
  let { type, name, desc } = action;
  if (type === 'PICK_CHEST') {
    let newState = {};
    newState.foundChest = true;
    newState.name = name;
    newState.desc = desc;
    console.log('Dispatched!', newState);
    return newState;
  }
  return state;
}

export default info;
