import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListFlightComponent from './components/ListFlightComponent';
import FooterComponent from './components/FooterComponents';
import CreateFlightComponent from './components/CreateFlightComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
                <Switch>
                  <Route path = "/" exact component = {ListFlightComponent}></Route> 
                  <Route path = "/Flights" component = {ListFlightComponent}></Route>
                  <Route path = "/add-flight" component = {CreateFlightComponent}></Route>
                </Switch>
            </div>
          <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
