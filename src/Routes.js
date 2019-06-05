import 	React from 'react';
import  Home from './Home';
import  Navigation from './Navigation';
import  About from './About';
import  Contact from './Contact';
import  PageNotFound from './PageNotFound';
import 	{BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function Routes() {
  return (
    <div >
      <Router>
      <Navigation/>
        <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route  path="/About" component={About}></Route>
      <Route  path="/Contact" component={Contact}></Route>
      <Route  component={PageNotFound}></Route>
        </Switch>
     </Router>
    </div>
  );
}

export default Routes;
