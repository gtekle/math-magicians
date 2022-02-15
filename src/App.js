import { Component } from 'react';

import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';
import Header from './pages/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <CalculatorPage />
        <Home />
        <Quote />
      </>
    );
  }
}

export default App;
