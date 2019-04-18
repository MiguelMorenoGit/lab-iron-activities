import React, { Component } from 'react';
import './stylesheets/App.css';
// nos imoprtamos las rutas
import Activities from './pages/Activities';
import ActivitieDetail from './pages/ActivitieDetail';

//importamos el switch y el Route para las rutas que necesitemos
import { Switch, Route} from 'react-router-dom';

// desde aqui llamaremos a la api
// hemos instalado axios ahora lo importamos
import axios from 'axios';

class App extends Component {
  //ponemos el estado inicial del componente
  state = {
    dataActivities:[],
    dataLoad: "false",
    itemsPerPage:18,
    offset:1
  };

  // funcion que se ejecutara cuando se monte el componente
  componentDidMount(){

    const {itemsPerPage, offset} = this.state;

    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)

    .then(({data}) => {
      console.log(data)
      this.setState({
        dataActivities:data,
        dataLoad: "true"
      })
    })
    .catch(err => console.log(err))

    console.log(this.state.dataActivities)
  }


  // listActivities = () => {
  //   return this.state.dataActivities.map( activity =>)
  // }


  render() {
    return (
      <Switch>
        <Route path='/' component={Activities}/>
        <Route path='/activities/:id' component={ActivitieDetail}/>
      </Switch>
    );
  }
}

export default App;
