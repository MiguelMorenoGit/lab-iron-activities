import React, { Component } from 'react';
import CartCard from './Cart/CartCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Navbar extends Component {

  
  showRedCircle = (value) => {
    return (
      value > 0 
        ? <sup className="number-circle">{value}</sup>  
        : "" 
    )
  }

  showActivityList = (array,name) => {
    return (
      array.length === 0 ? <p>{name} is empty</p> :
        <ul>
          {array.map(activity=> <CartCard key={activity.uuid} activity = {activity}/> )}
        </ul>
    )
  }


  render() {
    return (
    <div id="navbar">
      <p>{this.props.totalPrice} {"\u00A3"}</p>
      <div className="dropdown" >
        <p><FontAwesomeIcon icon="shopping-cart"/>{this.showRedCircle(this.props.carrito.length)}</p>
        <div className="dropdown-content">
          {this.showActivityList(this.props.carrito,"Cart")}
        </div>
      </div>
      <div className="dropdown" >
      <p><FontAwesomeIcon icon="star"/>{this.showRedCircle(this.props.favorites.length)}</p>
        <div className="dropdown-content">
          {this.showActivityList(this.props.favorites,"Favorites")}
        </div>
      </div>
    </div>
        
    );
  }
}

export default Navbar;