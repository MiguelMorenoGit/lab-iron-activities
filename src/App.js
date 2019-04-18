import React, { Component } from 'react';
import './stylesheets/App.css';
// nos imoprtamos las rutas
import Activities from './pages/Activities';
import ActivitieDetail from './pages/ActivitieDetail';

//importamos el switch y el Route para las rutas que necesitemos
import { Switch, Route} from 'react-router-dom';

class App extends Component {
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
