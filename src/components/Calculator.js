import { Component } from 'react';

import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    const handleButtonClick = (name) => {
      const { total, next, operation } = calculate(this.state, name);
      this.setState({
        total,
        next,
        operation,
      });
    };
    const { total, next, operation } = this.state;

    return (
      <div className="calculator-container">
        <div className="row">
          <Display text={next || operation || total} />
        </div>
        <div className="row">
          <Button clickHandler={handleButtonClick} name="AC" />
          <Button clickHandler={handleButtonClick} name="+/-" />
          <Button clickHandler={handleButtonClick} name="%" />
          <Button clickHandler={handleButtonClick} className="btn-operator" name="÷" />
        </div>
        <div className="row">
          <Button clickHandler={handleButtonClick} name="7" />
          <Button clickHandler={handleButtonClick} name="8" />
          <Button clickHandler={handleButtonClick} name="9" />
          <Button clickHandler={handleButtonClick} className="btn-operator" name="x" />
        </div>
        <div className="row">
          <Button clickHandler={handleButtonClick} name="4" />
          <Button clickHandler={handleButtonClick} name="5" />
          <Button clickHandler={handleButtonClick} name="6" />
          <Button clickHandler={handleButtonClick} className="btn-operator" name="-" />
        </div>
        <div className="row">
          <Button clickHandler={handleButtonClick} name="1" />
          <Button clickHandler={handleButtonClick} name="2" />
          <Button clickHandler={handleButtonClick} name="3" />
          <Button clickHandler={handleButtonClick} className="btn-operator" name="+" />
        </div>
        <div className="row">
          <Button clickHandler={handleButtonClick} className="btn-zero" name="0" />
          <Button clickHandler={handleButtonClick} name="." />
          <Button clickHandler={handleButtonClick} name="=" className="btn-operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
