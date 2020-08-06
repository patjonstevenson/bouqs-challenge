import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}

export default App;
