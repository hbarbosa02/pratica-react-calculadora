import React from 'react';

import './styles.css';

function Display({ value, ...props }) {
return <div className="display">{value}</div>;
}

export default Display;