import 	React from 'react';
import  Header from './Header';
import  About from './About';
import  Home from './Home';

import  Contact from './Contact';
import  PageNotFound from './PageNotFound';
import 	{Route,Switch} from 'react-router-dom'

function Routes() {
  return (
    <div >
    
        <Switch>
          <Route exact path="/" component={Home}></Route>

          <Route path="/Header" component={Header}></Route>
          <Route  path="/About" component={About}></Route>
          <Route  path="/Contact" component={Contact}></Route>
          <Route  component={PageNotFound}></Route>
        </Switch>
     
    </div>
  );
}

export default Routes;
