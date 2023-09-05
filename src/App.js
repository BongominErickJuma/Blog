import React from 'react'
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Create from './components/Create'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar/>
      <div className="main-wrapper">
      <Switch>
          <Route  exact path = '/' >
            <Home/>
          </Route>
          <Route exact path='/blogs'>
            <Blog/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails/>
          </Route>  
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
