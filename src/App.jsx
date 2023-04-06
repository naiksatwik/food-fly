import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Login from './pages/Register';
import Products from './pages/Products';
import SignIn from './pages/SignIn'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Landing}/>
          <Route path='/register' Component={Register}/>
          <Route path='/login' Component={Login}/>
          <Route path='/sigin' Component={SignIn}/>
          <Route path='/home' Component={Home}/>
          <Route path='/products' Component={Products}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;