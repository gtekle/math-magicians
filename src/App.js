import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
