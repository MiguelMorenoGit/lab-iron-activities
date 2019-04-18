import React, { Component } from 'react';
import { mainContext } from '../App';

class Activities extends Component {


  render() {
    
    return (
      <div>
        <mainContext.Consumer> 
          {(context) => {
            return context.listActivities()
          }}
        </mainContext.Consumer>
      </div>
    );
  }
}

export default Activities;