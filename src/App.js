import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from "react-redux";
import { fetchSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = ({ dispatch })=> {


  useEffect(() => {
    dispatch(fetchSmurfs())
  }, [])


  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

// const mapState = state => {
//   return {
//   smurfs: state.smurfs,
//   fetching: state.fetching,
//   error: state.error
//   }
// }


export default connect(null)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.