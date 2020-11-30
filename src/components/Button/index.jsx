import React from 'react';

import './styles.css';

function Button({ label, ...props }) {
  let classes = 'button '
  classes += props.operation ? 'operation' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple' : ''

  return (
    <button 
      className={classes} 
      onClick={e => props.click && props.click(label)}>
      {label}
    </button>
  );
}

export default Button;