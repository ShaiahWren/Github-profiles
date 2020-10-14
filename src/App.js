import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import "bulma/css/bulma.css";
import { Container } from "bloomer";



function App() {
  return (
    <div className="App">
      <Router>
        <SearchForm />
      </Router>
    </div>
  );
}

export default App;
