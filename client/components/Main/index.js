import React from 'react';
import Header from '../Header';
import Search from '../Search';
import FilterFields from '../FilterFields';
import Recipe from '../Recipe';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group'
import './index.scss';

export class Main extends React.Component {

  state = {
    term: '',
    selectedRecipeId: null,
    prepTime: 100,
    cookingTime: 100,
    showFilterBar: true,
    containsFruitChecked: false,
    containsVegetablesChecked: false,
    ingredientNumber: 50
  }

  handleTermInput = (e) => {
    const { name, value } = e.target;
    this.setState({ term: value })
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    if(value.length == 0){
      return this.setState({ [name]: 100 })
    }
    this.setState({ [name]: Number(value) })
  }

  toggleFruitChecked = () => {
    this.setState(prevState => ({containsFruitChecked: !prevState.containsFruitChecked}))
  }

  toggleVegetablesChecked = () => {
    this.setState(prevState => ({containsVegetablesChecked: !prevState.containsVegetablesChecked}))
  }

  resetView = () => {
    this.setState({selectedRecipeId: 0})
    this.setState({prepTime: 100})
    this.setState({cookingTime: 100})
    this.setState({term: ''})
  }

  onExpand = (recipeId) => {
    this.setState({selectedRecipeId: recipeId});
  };

  lessThanPrepTime = (enteredTime) => (recipe) => recipe.prepTime < enteredTime;

  lessThanCookingTime = (enteredTime) => (recipe) => recipe.cookingTime < enteredTime;

  lessThanIngredientNumber = (ingredientNo) => (recipe) => recipe.noIngredients < ingredientNo;

  vegetablesIncluded = (vegetablesIncluded) => (recipe) => {
    if(vegetablesIncluded) {
      return recipe.containsVegetables === true
    }
    else {
      return recipe
    }
  };

  fruitIncluded = (fruitIncluded) => (recipe) => {
    if(fruitIncluded) {
      return recipe.containsFruit === true
    }
    else {
      return recipe
    }
  };

  recipeFilter = (recipes) => {
    const { term, prepTime, cookingTime, containsFruitChecked, containsVegetablesChecked, ingredientNumber } = this.state;
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(term.toLowerCase()))
      .filter(this.lessThanPrepTime(prepTime))
      .filter(this.lessThanCookingTime(cookingTime))
      .filter(this.vegetablesIncluded(containsVegetablesChecked))
      .filter(this.fruitIncluded(containsFruitChecked))
      .filter(this.lessThanIngredientNumber(ingredientNumber))
  }

  showFilterBar = () => {
    this.setState(prevState => ({showFilterBar: !prevState.showFilterBar}))
  }

  render(){
    const { recipes } = this.props;
    const { term, prepTime, cookingTime, selectedRecipeId, showFilterBar, containsFruitChecked, containsVegetablesChecked, ingredientNumber } = this.state;
    return (
      <div className="wholeContainer">
        <Header
          term={term}
          name="term"
          handleTermInput={this.handleTermInput}
          placeholder="e.g. chicken"
        />
        <div className="mainContainer">
          {showFilterBar ?
            <div className="sidebar">
              <button onClick={this.resetView}>Reset View</button>
              <FilterFields
                handleInput={this.handleInput}
                prepTime={prepTime}
                cookingTime={cookingTime}
                containsFruitChecked={containsFruitChecked}
                containsVegetablesChecked={containsVegetablesChecked}
                toggleFruitChecked={this.toggleFruitChecked}
                toggleVegetablesChecked={this.toggleVegetablesChecked}
                ingredientNumber={ingredientNumber}
              />
            </div>
          :
          null
          }
          <div className="recipesContent">
            <button onClick={this.showFilterBar}>| | |</button>
            <div className="recipesContainer">
              {this.recipeFilter(recipes).length > 0 ?
                this.recipeFilter(recipes)
                .map((recipe, index) => (
                  <Recipe
                    key={index}
                    onExpand={this.onExpand}
                    recipe={recipe}
                    isExpanded={recipe.id === selectedRecipeId}
                    selectedRecipeId={selectedRecipeId}
                  />
              ))
              :
              'No recipes found'
            }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = dispatch => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
