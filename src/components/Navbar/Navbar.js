import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    console.log(this.props.totalPrice)
    return (
      <div id="navbar">
          <p>{this.props.totalPrice} Libras</p>
      </div>
    );
  }
}

export default Navbar;