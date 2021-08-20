import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ButtonPanel.css';

const ButtonPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const handleClick = (btnName) => props.clickHandler(btnName);
  return (
    <div className="button-panel">
      <div className="group-1 btn">
        <Button name="AC" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="+/-" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="%" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="group-2 btn">
        <Button name="7" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="8" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="9" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="group-3 btn">
        <Button name="4" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="5" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="6" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="group-4 btn">
        <Button name="1" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="2" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="3" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="group-5 btn">
        <Button name="0" color="#E0E0E0" clickHandler={handleClick} />
        <Button name="." color="#E0E0E0" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.prototype = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
