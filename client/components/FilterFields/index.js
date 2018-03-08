import React from 'react';
import './index.scss';

class FilterFields extends React.Component {

  state = {

  }

  render(){
    const { handleInput, prepTime, cookingTime, containsFruitChecked, containsVegetablesChecked, toggleVegetablesChecked, toggleFruitChecked, ingredientNumber } = this.props;
    return(
      <div className="filtersContainer">
        <h2> Filters </h2>
        <div className="filterContainer">
          <h4> Timings </h4>
          <p>Max Prep Time: {prepTime} minutes</p>
          <input
            type="range"
            min="0"
            max="100"
            placeholder="Prep Time"
            onChange={handleInput}
            name="prepTime"
            value={prepTime}
          />
          <p>Max Cooking Time: {cookingTime} minutes</p>
          <input
            type="range"
            min="0"
            max="100"
            placeholder="Cooking Time"
            onChange={handleInput}
            name="cookingTime"
            value={cookingTime}
          />
        </div>
        <div className="filterContainer">
          <h4> No. Ingredients </h4>
          <p>Max number of ingredients</p>
          <input
            type="number"
            value={ingredientNumber}
            onChange={handleInput}
          />
        </div>
        <div className="filterContainer">
          <h4> Vegetables? </h4>
          <p>Tick for yes</p>
          <input
            type="checkbox"
            checked={containsVegetablesChecked}
            onClick={toggleVegetablesChecked}
          />
        </div>
        <div className="filterContainer">
          <h4> Fruit? </h4>
          <p>Tick for yes</p>
          <input
            type="checkbox"
            checked={containsFruitChecked}
            onClick={toggleFruitChecked}
          />
        </div>
      </div>
    )
  }
}
export default FilterFields;
