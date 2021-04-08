import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Admin from './Components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Checkouts from './Components/Checkouts/Checkouts';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Order from './Components/Order/Order';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={[user, setUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar/>
          <Home/>
        </Route>
        <Route exact path="/home">
          <Navbar/>
          <Home/>
        </Route>
        <PrivetRoute path="/checkout/:id">
          <Navbar/>
          <Checkouts/>
        </PrivetRoute>
        <PrivetRoute path="/orders">
          <Navbar/>
          <Order/>
        </PrivetRoute>
        <Route exact path="/login">
          <Navbar/>
          <Login/>
        </Route>
        <PrivetRoute path="/admin">
          <Navbar/>
          <Admin />
        </PrivetRoute>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
