'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  let newState = { ...state };
  const result = [];

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = {
        ...newState, ...action.extraData,
      };
    }

    if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete newState[key];
      }
    }

    if (action.type === 'clear') {
      newState = {};
    }

    result.push({ ...newState });
  }

  return result;
}

module.exports = transformStateWithClones;
