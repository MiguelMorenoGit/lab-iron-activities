import React, { Component } from 'react';
import CartCard from './Cart/CartCard';

class Navbar extends Component {

  state = {
    isClicked:"false"
  }




  render() {
    return (
    <div id="navbar">
      <p>{this.props.totalPrice} Libras</p>
      <div className="dropdown" >
        <p>Carrito {this.props.carrito.length > 0 
                  ? <sup className="number-circle">{this.props.carrito.length}</sup>  
                  : "" }</p>
        <div className="dropdown-content">
          {this.props.carrito.length === 0 ? <p>Cart is empty</p> :
          <ul>
            {this.props.carrito.map(activity=> <CartCard key={activity.uuid} activity = {activity}/> )}
          </ul>
          }
        </div>
      </div>
    </div>
        
    );
  }
}

export default Navbar;