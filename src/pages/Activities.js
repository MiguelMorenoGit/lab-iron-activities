import React, { Component } from 'react';
import GetActivities from '../services/GetActivities';

class Activities extends Component {

  state = {
    dataActivities:[],
    status:"isLoading",
    itemsPerPage:18,
    offset:1
  }

  componentDidMount(){
    GetActivities(({data})=>{
      this.setState({
        dataActivities:data,
        status:'isLoaded'
      })
    })
  }
  render() {
    const {dataActivities} = this.state
    return (
      <div>
        welcome to Museums miguel 
        {dataActivities}
      </div>
    );
  }
}

export default Activities;