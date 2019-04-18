import React, { Component } from 'react';
// import { MDBContainer } from "mdbreact"
import './stylesheets/App.css';

// nos importamos las rutas
import Activities from './pages/Activities';
import ActivitieDetail from './pages/ActivitieDetail';
import NotFound from './pages/NotFound';

// nos importamos las componentes
import Card from './components/Card/Card';


//importamos el BrowserRouter, el switch y el Route para las rutas que necesitemos
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// desde aqui llamaremos a la api
// hemos instalado axios ahora lo importamos
import axios from 'axios';

//nos creamos los context para pasar las props a los componentes que los necesiten
export const mainContext = React.createContext("test");
// const detailContext = React.createContext();

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
  }


  listActivities = () => {
    return this.state.dataActivities.map( activity => <Card key={activity.uuid} activity={activity}/>);
  }


  render() {
    return (
      <Router>
        <Switch>
          <mainContext.Provider value={{ listActivities: this.listActivities}}>
            <Route exact path='/' component={Activities}/>
          </mainContext.Provider>
          <Route path='/activities/:uuid' component={ActivitieDetail}/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
