import React from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'


class HarambeButton extends React.Component{
  render(){
    return <button onClick={() => this.onClick()} className="btn">
     <span></span><span className="prayer-counter">{this.props.prayers}</span>
    </button>
  }
  onClick(){
    store.dispatch({type: 'PRAYER'})
  }
}

const mapStateToProps = function(store) {
  return {
    // props go on the left, state goes on right
    prayers: store.prayerState.prayers
  }
}

export default connect(mapStateToProps)(HarambeButton)
