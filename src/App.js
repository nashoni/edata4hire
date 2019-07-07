import React,{Component} from 'react';
import  Routes from './Routes';

import  Navigation from './Navigation';
import  Footer from './Footer';
import 	{BrowserRouter as Router} from 'react-router-dom'

class App extends Component{


	render(){
		return(
			<Router>
				<div>
				<Routes/>
				<Footer/>
				
			</div>
			</Router>
			

			)
	}
}


export default App;
