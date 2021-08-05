import React from 'react';
import Button from './Button';
//
function ButtonPanel() {
// Should render the calculator panel with all Buttons
  return (
    <div>
      <div>
        <Button btnChar="AC" />
        <Button btnChar="+/-" />
        <Button btnChar="%" />
        <Button btnChar="/" />
      </div>
      <div>
        <Button btnChar="7" />
        <Button btnChar="8" />
        <Button btnChar="9" />
        <Button btnChar="X" />
      </div>
      <div>
        <Button btnChar="4" />
        <Button btnChar="5" />
        <Button btnChar="6" />
        <Button btnChar="-" />
      </div>
      <div>
        <Button btnChar="1" />
        <Button btnChar="2" />
        <Button btnChar="3" />
        <Button btnChar="+" />
      </div>
      <div>
        <Button btnChar="0" />
        <Button btnChar="." />
        <Button btnChar="=" />
        <Button btnChar="" />
      </div>
    </div>
  );
}

export default ButtonPanel;
