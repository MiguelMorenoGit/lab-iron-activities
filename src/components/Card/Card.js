import React, { Component } from 'react';
import { navbarContext } from '../../App';


class Card extends Component {

  state = {
    isClicked: false,
    // totalPrice: this.props.totalPrice
  }

  onClick = (context) => {
    this.state.isClicked ? 
    this.setState ({isClicked : false})
    : this.setState ({isClicked : true})
  }

  kaka = () => {
   console.log("jajajaja")
  }


  render() {

    let label = "Add to Card";
    let classClicked="";

    if(this.state.isClicked){
       label = "In Card";
       classClicked= "clicked";
    }
    const { activity } = this.props;
    return (
      
        <article className="card-container">
          <img className="card-image" src={ activity.cover_image_url } alt="coverImage"/>
          <h3 className="card-title">{activity.title}</h3>
          <p className="card-content">{activity.description}</p>
          <navbarContext.Consumer>
            {(context => {
              return <button  onClick={()=>{this.onClick(); 
                (!this.state.isClicked) ? context.addActivity(activity.uuid)
                :context.removeActivity(activity.uuid)}}  
                className={`card-car-button ${classClicked}`}>{label}</button>
            })}
          </navbarContext.Consumer>
            
        </article>
      
    );
  }
}


export default Card;