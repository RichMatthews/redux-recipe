import React from 'react';
import Search from '../Search';
import FilterFields from '../FilterFields';
import { connect } from 'react-redux';
import './index.scss';

export class Main extends React.Component {

  state = {
    term: '',
    selectedRecipeId: 0
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({term: value})
  }

  expandRecipe = (recipeId) => {
    this.setState({ selectedRecipeId: recipeId })
  }

  renderExpandedView = (recipe) => {
    if (this.state.selectedRecipeId === recipe.id){
      return 'recipeContainerExpanded'
    }
    else {
      return null
    }
  }

  resetView = () => {
    this.setState({selectedRecipeId: 0})
  }

  render(){
    const { recipes } = this.props;
    const { term } = this.state;
    return (
      <div>
        <h1>Recipes</h1>
        <button onClick={this.resetView}>Reset View</button>
        <FilterFields />
        <input onChange={this.handleInput} />
        <div className="recipesContainer">
          {recipes.filter(recipe => recipe.name.toLowerCase().startsWith(term.toLowerCase()) || recipe.ingredients.some(ingredient => ingredient.startsWith(term.toLowerCase()))).map((recipe, index) => (
            <div key={index} className={`recipeContainer ${this.renderExpandedView(recipe)}`}>
              <h3>{recipe.name}</h3>
              <button onClick={() => this.expandRecipe(recipe.id)}>Expand</button>
              <h4>Ingredients</h4>
              <p>{recipe.ingredients.map(ingredient => <p>{ingredient}</p>)}</p>
            </div>
          ))}
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
