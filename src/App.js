import React from 'react';
import './App.css';
import Checkout from './Components/Checkout';
import Header from './Components/Header';
import Home from './Components/Home';
import './Components/Login';
import Order from './Components/Order';
import Profile from './Components/Profile';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/profile' element={
            <React.Fragment>
              <Header />
              <Profile/>
            </React.Fragment>
          }></Route>

          <Route path='/orderPlaced' element={
            <React.Fragment>
              <Header />
              <Order/>
            </React.Fragment>
          }></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='/checkout' element={
            <React.Fragment>
              <Header />
              <Checkout />
            </React.Fragment>
          }></Route>

          <Route path='/' element={
            <React.Fragment>
              <Header />
              <Home />
            </React.Fragment>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
