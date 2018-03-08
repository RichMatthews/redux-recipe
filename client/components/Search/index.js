import React from 'react';
import './index.scss';

const component = ({ term, handleTermInput, name }) => (
  <input
    className="searchContainer"
    placeholder="e.g. beef"
    onChange={handleTermInput}
    name={name}
    term={term}
  />
)

export default component;
