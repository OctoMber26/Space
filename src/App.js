import React,{ Fragment } from 'react';
import Home from './components/Home/HomePage';
import {Route} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Destination from './components/Destination/Destination';
import Header from './components/Home/Header';
import Mars from './components/Destination/Mars';
import Moon from './components/Destination/Moon';
import Europa from './components/Destination/Europa';
import Titan from './components/Destination/Titan';
import Crew from './components/Crew/Crew';


function App() {

  return (
    <Fragment>
      <Header />
      <Switch>
      <Route path="/crew" exact>
                <Crew />
            </Route>
      <Route path="/titan" exact>
                <Titan />
            </Route>
      <Route path="/europa" exact>
                <Europa />
            </Route>
      <Route path="/moon" exact>
                <Moon />
            </Route>
      <Route path="/mars" exact>
                <Mars />
            </Route>
      <Route path="/destination" exact>
          <Destination />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
      </Fragment>
  );
}

export default App;
