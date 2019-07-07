import React from 'react';
import  Header from './Header';
import  {BrowserRouter as Router} from 'react-router-dom'
import  Navigation from './Navigation';
import  Details from './Details';
import  Signin from './Signin';

const Home = (props) => {
  return (
    <div>

        <Navigation/>
            <Signin/>
    	<Header/>


<Details/>
    </div>
  )
}

export default Home;