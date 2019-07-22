import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
//correct component to import to?
import data from '../data.js'


const App = (props) => {
  //const data = data
  let directors = data.directors
  return (
    <Router>
      <div>
        <NavBar />
        <br></br>
        <Route exact path='/' component={Home} />
  
        <Route exact path='/movies'
         render={routeProps => (<Movies {...routeProps} {...data}/>)} />

        <Route exact path='/directors' component={routeProps => (<Directors {...routeProps} directors={data.directors}/>)} />
        <Route exact path='/actors' component={routeProps => (<Actors {...routeProps} actors={data.actors}/>)} />
      </div>
    </Router>
  );
};

export default App
