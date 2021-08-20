import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Display.css';

const Display = (props) => {
  const { result } = props;
  return (
    <div className="app-display">
      <h2 style={{ textAlign: 'right', fontSize: '3rem', marginRight: '1rem' }}>
        {result}
      </h2>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
