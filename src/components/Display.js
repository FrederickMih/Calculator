import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div>
      <h2>
        result:
        {result}
      </h2>
    </div>
  );
}


