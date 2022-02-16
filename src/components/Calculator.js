import { useState } from 'react';

import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleButtonClick = (name) => {
    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation }, name);

    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

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

export default Calculator;
