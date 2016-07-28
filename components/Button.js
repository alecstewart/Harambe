import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'

class Button extends Component {
  onClick() {
    store.dispatch({type: '1UP'})
  }

onMouseOver() {
  store.dispatch({type: 'ENEMY', lives: -100})
}

  render() {
    return <div className="mdl-cell mdl-cell--1-col">
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" onClick={() => this.onClick()} onMouseOver={() => this.onMouseOver()}>
        {this.props.lives}
      </button>
    </div>
  }
}


const mapStateToProps = function(store) {
  return {
    // props go on the left, state goes on right
    lives: store.gameState.lives
  }
}

// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     onClick: function() {
//       dispatch({type: '1UP'})
//     }
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Thing)
export default connect(mapStateToProps)(Button)
