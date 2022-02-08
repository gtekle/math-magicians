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
    return (
      <div className="calculator-container">
        <div className="row">
          <Display />
        </div>
        <div className="row">
          <Button clickHandler={() => calculate(this.state, 'AC')} name="AC" />
          <Button clickHandler={() => calculate(this.state, '+/-')} name="+/-" />
          <Button clickHandler={() => calculate(this.state, '%')} name="%" />
          <Button clickHandler={() => calculate(this.state, '÷')} className="btn-operator" name="÷" />
        </div>
        <div className="row">
          <Button clickHandler={() => calculate(this.state, '7')} name="7" />
          <Button clickHandler={() => calculate(this.state, '8')} name="8" />
          <Button clickHandler={() => calculate(this.state, '9')} name="9" />
          <Button clickHandler={() => calculate(this.state, 'x')} className="btn-operator" name="x" />
        </div>
        <div className="row">
          <Button clickHandler={() => calculate(this.state, '4')} name="4" />
          <Button clickHandler={() => calculate(this.state, '5')} name="5" />
          <Button clickHandler={() => calculate(this.state, '6')} name="6" />
          <Button clickHandler={() => calculate(this.state, '-')} className="btn-operator" name="-" />
        </div>
        <div className="row">
          <Button clickHandler={() => calculate(this.state, '1')} name="1" />
          <Button clickHandler={() => calculate(this.state, '2')} name="2" />
          <Button clickHandler={() => calculate(this.state, '3')} name="3" />
          <Button clickHandler={() => calculate(this.state, '+')} className="btn-operator" name="+" />
        </div>
        <div className="row">
          <Button clickHandler={() => calculate(this.state, '0')} className="btn-zero" name="0" />
          <Button clickHandler={() => calculate(this.state, '.')} name="." />
          <Button clickHandler={() => calculate(this.state, '=')} name="=" className="btn-operator" />
        </div>
      </div>
    );
  }
}

export default Calculator;
