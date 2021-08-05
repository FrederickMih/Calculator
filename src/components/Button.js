import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { btnChar } = props;
  return (
    <button className="button" type="button">
      {btnChar}
    </button>
  );
}

Button.propTypes = {
  btnChar: PropTypes.string.isRequired,
};

export default Button;
