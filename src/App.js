import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import Home from './ReactMenus/Home';
import About from './ReactMenus/About';
import Contact from './ReactMenus/Contact';
import Services from './ReactMenus/Services';
import Navbar from './ReactMenus/Navbar';
import Footer from './ReactMenus/Footer';

function App() {
  return (
   <BrowserRouter>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/services' component={Services}/>
              <Route exact path='/contact' component={Contact}/>
            </Switch>
            <Footer/>
   </BrowserRouter>
  );
}

export default App;
