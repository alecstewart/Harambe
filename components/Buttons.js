import React, { Component } from 'react'
import Button from './Button'

var buttonArray = []
for(var i =1; i < 100; i++) {
  buttonArray.push(<Button key={i} />)
}

var Buttons = (props) => <div className="centered">
  <div className="mdl-grid">
    {[...Array(1)].map((n, i) =>
      <Button key={i + 1} />
    )}
  </div>
</div>

export default Buttons
