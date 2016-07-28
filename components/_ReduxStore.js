import { createStore, combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// Redux reducer function
function prayerReducer (state = {prayers: 0}, action) {

  // Clone existing state into a new object we can mutate
  var newState = Object.assign({}, state)

  // Based on the type being dispatched, mutate newState
  switch (action.type) {
    case 'PRAYER':
      newState.prayers += 1
      break
  }

  return newState
}


// Merge our gameReducer with the React Router Redux reducer helper
const store = createStore(
  combineReducers({
    prayerState: prayerReducer,
  })
)

export default store
