import Display from './Display';
import Button from './Button';

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="row">
        <Display />
      </div>
      <div className="row">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button className="btn btn-operator" name="/" />
      </div>
      <div className="row">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button className="btn btn-operator" name="x" />
      </div>
      <div className="row">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button className="btn-operator" name="x" />
      </div>
      <div className="row">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" className="btn-operator" />
      </div>
      <div className="row">
        <Button className="btn-zero" name="0" />
        <Button name="." />
        <Button name="=" className="btn-operator" />
      </div>
    </div>
  );
}

export default Calculator;
