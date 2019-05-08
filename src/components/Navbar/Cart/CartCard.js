import React, { Component } from 'react';

class CartCard extends Component {
  render() {
    const {activity} = this.props;
    return (
      <li className="cart-card-container">
        <img className="cart-card-image" src={ activity.cover_image_url } alt="coverImage"/>
        <p>{activity.title}</p> 
      </li>
    );
  }
}

export default CartCard;
