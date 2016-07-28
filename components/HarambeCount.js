import React from 'react'
import { connect } from 'react-redux'
import store from './_ReduxStore'


class HarambeCount extends React.Component{
  render(){
    return <div>
      {this.props.prayers}
    </div>
  }
}

const mapStateToProps = function(store) {
  return {
    // props go on the left, state goes on right
    prayers: store.prayerState.prayers
  }
}

export default connect(mapStateToProps)(HarambeCount)
