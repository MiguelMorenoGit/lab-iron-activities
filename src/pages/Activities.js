import React, { Component } from 'react';
import { mainContext } from '../App';


class Activities extends Component {


  render() {
    
    return (
      <div >
        <div id="list-activities">
          
            <mainContext.Consumer> 
                {(context) => {
                  return context.listActivities()
                }}
            </mainContext.Consumer>
          
        </div>
      </div>
    );
  }
}

export default Activities;