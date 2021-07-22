import React from 'react';
import './App.scss';
import Navbar from './components/Navbar.js';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
          <Switch>
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
