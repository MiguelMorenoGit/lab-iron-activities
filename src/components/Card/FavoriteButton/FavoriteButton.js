import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FavoriteButton extends Component {
  state = {
    isClicked: false,
    // totalPrice: this.props.totalPrice
  }

  onClick = () => {
    this.state.isClicked ? 
    this.setState ({isClicked : false})
    : this.setState ({isClicked : true})
  }

  render() {

    let classClicked="";

    if(this.state.isClicked){
      classClicked= "fav-clicked";
    }
    const { activity, context } = this.props

    return (
      
      <button  onClick={ () => {
          this.onClick(); 
          (!this.state.isClicked) ? context.addFavorite(activity.uuid)
          :context.removeFavorite(activity.uuid)
          }}  
          className={`card-fav-button ${classClicked}`}
          ><FontAwesomeIcon icon="star" />
      </button>
    );
  }
}

export default FavoriteButton;