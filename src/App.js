import React, { Component } from 'react';
// import { MDBContainer } from "mdbreact"
import './stylesheets/App.css';

// nos importamos las rutas
import Activities from './pages/Activities';
import ActivitieDetail from './pages/ActivitieDetail';
import NotFound from './pages/NotFound';

// nos importamos las componentes
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';



//importamos el BrowserRouter, el switch y el Route para las rutas que necesitemos
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// desde aqui llamaremos a la api
// hemos instalado axios ahora lo importamos
import axios from 'axios';


//nos creamos los context para pasar las props a los componentes que los necesiten
export const mainContext = React.createContext("test");
export const navbarContext = React.createContext("text");
// const detailContext = React.createContext();

class App extends Component {
  //ponemos el estado inicial del componente
  state = {
    dataActivities:[],
    dataLoad: "false",
    itemsPerPage:18,
    offset:1,
    totalPrice:0,
    favoritos : [],
    nFavoritos: 0,
    carrito : [],
    nCarrito : 0,
  };

  // funcion que se ejecutara cuando se monte el componente
  componentDidMount(){

    const {itemsPerPage, offset} = this.state;

    axios.get(`https://api.musement.com/api/v3/venues/164/activities?limit=${itemsPerPage}&offset=${offset}`)

    .then(({data}) => {
      // console.log(data)
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

  addActivity = (id) => {
    // get tour that matches id
    const activity = this.state.dataActivities.filter(activity => activity.uuid === id)

    this.setState({
      //update state with new tour and add price to total
      totalPrice: this.state.totalPrice + activity[0].retail_price.value,
      carrito: [...this.state.carrito, activity[0]],
    })

  }

  removeActivity = (id) => {
    //get removed tour for get price
    const removed = this.state.dataActivities.filter(activity => activity.uuid === id)

    //get car list without tour.id, it is the new list.
    const carrito = this.state.carrito.filter(activity => activity.uuid !== id)

    this.setState({
      carrito,
      totalPrice: this.state.totalPrice - removed[0].retail_price.value,
    })
  }


  consoleLog = () => {
    console.log(this.state.carrito, this.state.carrito.length)
  }

  render() {
    
    return (
      <div>
        <navbarContext.Provider value = {{totalPrice:this.state.totalPrice, addActivity:this.addActivity, removeActivity:this.removeActivity}}>
          <Navbar totalPrice={this.state.totalPrice} carrito={this.state.carrito}/>
          <Router>
            <Switch>
              <mainContext.Provider value={{ listActivities: this.listActivities, state:this.state}}>
                <Route exact path='/' component={Activities}/>
              </mainContext.Provider>
              <Route path='/activities/:uuid' component={ActivitieDetail}/>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </navbarContext.Provider>
        {this.consoleLog()}
      </div>
    );
  }
}

export default App;
