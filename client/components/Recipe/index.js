import React from 'react';
import Button from '../Button';
import './index.scss';

class component extends React.Component {

  state = {
    showButtonName: true,
    showMethod: false,
    showView: 'default',
    detailsButton: false
  }

  toggleMethod = () => {
    this.setState(prevState => ({ showMethod: !prevState.showMethod }))
    this.setState(prevState => ({ showButtonName: !prevState.showButtonName }))
  }

  activateDetails = () => {
    this.setState(prevState => ({detailsButton: !prevState.detailsButton}))
  }

  renderView = () => {
    switch(this.state.showView){
      case 'SHOW_METHOD':{
        return <div>
                <h4>Method</h4>
                <p>{this.props.recipe.method.map(instruction => <p>{instruction}</p>)}</p>
               </div>
      }
      case 'SHOW_INGREDIENTS':{
        return <div>
                <h4>Ingredients</h4>
                <p>{this.props.recipe.ingredients.map(ingredient => <p>{ingredient}</p>)}</p>
              </div>
      }
      case 'default':{
        return <div className="defaultView">
          <img className="recipeImage" src={this.props.recipe.image} />
          <div className="recipeName"><span>{this.props.recipe.name}</span></div>
          <div className="overlay">
            <div className="prepTime">Prep: {this.props.recipe.prepTime} mins</div>
            <div className="cookingTime">Cooking: {this.props.recipe.cookingTime} mins</div>
          </div>
        </div>
      }
    }
  }

  render(){
    const { index, recipe } = this.props;
    const { showMethod, showButtonName, showView, detailsButton } = this.state;
    return(
      <div key={index} className="recipeContainer">
        <img className="recipeImage" src={this.props.recipe.image} />
        <div className="recipeName"><span>{this.props.recipe.name}</span></div>
        <div className="overlay">
          <div className="prepTime">Prep: {this.props.recipe.prepTime} mins</div>
          <div className="cookingTime">Cooking: {this.props.recipe.cookingTime} mins</div>
        </div>
      </div>
    )
  }
}

export default component;
