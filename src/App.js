import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";

import './App.css';

import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Category from "./pages/Category";

import fetchData from "./state/actions/fetchData";


function App(props) {

  useEffect(() => {
    if (!props.hasData) {
      props.fetchData();
    }
  }, [])
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard} />
      <Route path="/cart" component={Cart} />
      <Route
        path="/category/:name"
        render={props => <Category props={props} />}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return ({
    hasData: Boolean(state.products.data.length)
  })
}

export default connect(mapStateToProps, { fetchData })(App);
