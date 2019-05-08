import React, { Component } from 'react';

class CartButton extends Component {

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

    let label = "Add to Card";
    let classClicked="";

    if(this.state.isClicked){
      label = "In Card";
      classClicked= "clicked";
    }
    const { activity, context } = this.props

    return (
      
      <button  onClick={ () => {
          this.onClick(); 
          (!this.state.isClicked) ? context.addActivity(activity.uuid)
          :context.removeActivity(activity.uuid)
          }}  
          className={`card-car-button ${classClicked}`}
          >{label}
      </button>
    );
  }
}

export default CartButton;