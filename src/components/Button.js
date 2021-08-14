import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  const handleClick = (btnName) => props.clickHandler(btnName);

  return (
    <button className="btn" type="button" onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
