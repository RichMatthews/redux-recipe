import React from 'react';
import './index.scss';

const component = ({ onClick, className, text }) => (
  <button onClick={onClick} className={`${className} buttonStd`}>
    {text}
  </button>
)

export default component;
