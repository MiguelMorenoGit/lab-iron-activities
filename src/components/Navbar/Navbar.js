import React, { Component } from 'react';

class Navbar extends Component {

  state = {
    isClicked:"false"
  }

  onClick = () =>{
    this.setState({
      isClicked:"true"
    })
    setTimeout(function(){
      this.setState({isClicked:"false"});
    }.bind(this),3000)

      
        
  }
  render() {
    return (
      <div id="navbar">
          <p>{this.props.totalPrice} Libras</p>
          <div onClick={this.onClick} >
            <p>Carrito {this.props.carrito.length > 0 
                      ? <sup className="number-circle">{this.props.carrito.length}</sup>  
                      : "" }</p>
            <div>{this.state.isClicked==="true" ? <div className="dropdown"><p>carrito is here!</p></div> : <div></div>}</div>
          </div>
      </div>
    );
  }
}

export default Navbar;