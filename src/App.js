import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Category from "./pages/Category";


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/cart" component={Cart} />
      <Route
        path="/category/:name"
        render={props => <Category />}
      />
    </div>
  );
}

export default App;
