import React from 'react'
import {Route, BrowserRouter as Router}  from 'react-router-dom'
import NavIteam from './NavIteam/index';
import Album from './pages/album';
import Home from './pages/home'
import Pricing from './pages/Pricing';
import Blog from './pages/Blog'

function App() {
    
    return (
         <>
         <Router>
           <NavIteam/>
           <Route path='/' exact component={Home}/>
           <Route path='/album' component={Album} />
           <Route path='/pricing' component={Pricing} />
           <Route path='/blog' component={Blog} />
         </Router> 
       
          
        
         </>
    )
}

export default App
