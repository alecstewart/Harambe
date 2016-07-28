import React from 'react'
import ReactDOM from 'react-dom'
import HarambeButton from '../components/HarambeButton'
import HarambeCount from '../components/HarambeCount'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import store from '../components/_ReduxStore'

ReactDOM.render(<Provider store={store}>
  <div>
    <HarambeButton/>
  </div>
</Provider>, document.getElementById('playground'))

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import { Router, Route, browserHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux'
//
// import store from '../components/_ReduxStore'
// import Buttons from '../components/Buttons'
// import Colors from '../components/Colors'
//
// const history = syncHistoryWithStore(browserHistory, store)
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path="/" component={Buttons} />
//       <Route path="/colors" component={Colors} />
//     </Router>
//   </Provider>
// , document.getElementById('playground'))

// import Thing from '../components/Thing'
//
// ReactDOM.render(<div><Thing /><Thing /></div>, document.getElementById('playground'))
