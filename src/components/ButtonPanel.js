import React from 'react';
import Button from 'Button';
//
function ButtonPanel() {
// Should render the calculator panel with all Buttons
  return (
    <div>
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
      {/* // <div></div> */}
    </div>
  );
}

export default ButtonPanel;
