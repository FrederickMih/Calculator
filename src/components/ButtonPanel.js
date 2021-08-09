import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

function ButtonPanel(props) {
  const handleClick = (btnName) => props.clickHandler(btnName);
  return (
    <>
      <div>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </div>
      <div>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" />
      </div>
      <div>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div>
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </>
  );
}

// Passing clickHandler property to each button
ButtonPanel.prototype = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
