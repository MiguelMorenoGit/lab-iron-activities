import React, { Component } from 'react';
import { navbarContext } from '../../App';
import CartButton from './CartButton/CartButton';
import FavoriteButton from './FavoriteButton/FavoriteButton';


class Card extends Component {
  render() {
    const { activity } = this.props;
    return (
      
        <article className="card-container">
          <navbarContext.Consumer>
            {(context => <FavoriteButton context={context} activity={activity}/>)}
          </navbarContext.Consumer>
          <img className="card-image" src={ activity.cover_image_url } alt="coverImage"/>
          <h3 className="card-title">{activity.title}</h3>
          <p className="card-content">{activity.description}</p>
          <navbarContext.Consumer>
            {(context => <CartButton context={context} activity={activity}/>)}
          </navbarContext.Consumer>
        </article>
      
    );
  }
}


export default Card;