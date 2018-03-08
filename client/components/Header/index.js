import React from 'react';
import Search from '../Search';
import './index.scss';

const component = ({ term, handleTermInput, name }) => (
  <div className="recipesHeading">
    <h1> Recipes </h1>
    <Search
      term={term}
      handleTermInput={handleTermInput}
      name={name}
    />
  </div>
)

export default component;
