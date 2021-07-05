import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {Navbar,Footer,ScrollEffect} from './Components'
import Globalstyle from './globalstyles';
import HomePage from './Page/HomePage/HomePage';
import Services from './Page/Services/Services';
import Products from './Page/Products/Products';
import Security from './Page/Security/Security'

function App() {
  return (
    <Router>
      <Globalstyle/>
     <Navbar/>
     <ScrollEffect/>
     <Switch >
     <Route path='/' exact component= {HomePage}></Route>
     <Route path='/services' exact component= {Services}></Route>
     <Route path='/products' exact component= {Products}></Route>
     <Route path='/security' exact component= {Security}></Route>
     
     </Switch>
     <Footer/>
     <Switch>
       
     </Switch>
    </Router>
    
  );
}

export default App;
