import React, { Component } from 'react';

class Navbar extends Component {

  onClick = () =>{
    console.log("hello world")
      return  <div className="carrito-pop-up">
                <p>hello world</p>
              </div>

      
        
  }
  render() {
    return (
      <div id="navbar">
          <p>{this.props.totalPrice} Libras</p>
          <div onClick={this.onClick} >
            <p>Carrito {this.props.carrito.length > 0 
                      ? <sup className="number-circle">{this.props.carrito.length}</sup>  
                      : "" }</p>
                    
          </div>
      </div>
    );
  }
}

export default Navbar;