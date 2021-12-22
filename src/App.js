import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListFlightComponent from './components/ListFlightComponent';
import FooterComponent from './components/FooterComponents';
import CreateFlightComponent from './components/CreateFlightComponent';
import ViewFlightComponent from './components/ViewFlightComponent';


function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
                <Switch>
                  <Route path = "/" exact component = {ListFlightComponent}></Route> 
                  <Route path = "/Flights" component = {ListFlightComponent}></Route>
                  <Route path = "/add-flight/:id" component = {CreateFlightComponent}></Route>
                  <Route path = "/view-flight/:id" component = {ViewFlightComponent}></Route>

                  {/* <Route path = "/update-flight/:id" component = {UpdateFlightComponent}></Route> */}

                </Switch>
            </div>
          <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
