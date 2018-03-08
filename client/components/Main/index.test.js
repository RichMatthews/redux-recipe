import React from 'react';
import { mount, shallow } from 'enzyme';
import { Main } from './index';
import Recipe from '../Recipe';

describe('main component', () => {
  let wrapper;
  let recipesStub = [{
			"id": 1,
			"image": "/images/beefLasagne.jpeg",
			"name": "Beef Lasagne",
			"noIngredients": 9,
			"prepTime": 10,
			"cookingTime": 10,
			"containsFruit":false,
			"containsVegetables":false,
			"ingredients": [
				"mince",
				"stock",
				"pasta",
				"sauce",
				"tomatoes"
			],
			"method": [
				"first do this",
				"secondly do that"
			]
		},
    {
  			"id": 2,
  			"image": "/images/beefLasagne.jpeg",
  			"name": "Beef Lasagne",
  			"noIngredients": 9,
  			"prepTime": 30,
  			"cookingTime": 45,
  			"containsFruit":true,
  			"containsVegetables":false,
  			"ingredients": [
  				"mince",
  				"stock",
  				"pasta",
  				"sauce",
  				"tomatoes"
  			],
  			"method": [
  				"first do this",
  				"secondly do that"
  			]
  		},{
    			"id": 3,
    			"image": "/images/beefLasagne.jpeg",
    			"name": "Beef Lasagne",
    			"noIngredients": 9,
    			"prepTime": 30,
    			"cookingTime": 45,
    			"containsFruit":true,
    			"containsVegetables":false,
    			"ingredients": [
    				"mince",
    				"stock",
    				"pasta",
    				"sauce",
    				"tomatoes"
    			],
    			"method": [
    				"first do this",
    				"secondly do that"
    			]
    		}]
  beforeEach(() => {
    wrapper = mount(
      <Main
        recipes={recipesStub}
      />
    )
  });
  test('toggles the filter bar', () => {
    wrapper.instance().showFilterBar()
    expect(wrapper.state().showFilterBar).toEqual(false);
  });
  test('resetView', () => {
    wrapper.setState({prepTime: 50})
    wrapper.instance().resetView();
    expect(wrapper.state().prepTime).toEqual(100)
  })
  test('handleInput', () => {
    wrapper.instance().handleTermInput({
      target: { name: 'term', value: 'beef' }
    });
    expect(wrapper.state().term).toEqual('beef')
  });
  test('recipeFiler', () => {
    wrapper.instance().recipeFilter(recipesStub);
    expect(wrapper.find(Recipe).length).toEqual(3)
  })
  test('recipeFiler', () => {
    wrapper.instance().recipeFilter(recipesStub);
    wrapper.setState({prepTime: 15});
    wrapper.setState({cookingTime: 15});
    expect(wrapper.find(Recipe).length).toEqual(1)
  });
  test('recipeFiler', () => {
    wrapper.instance().recipeFilter(recipesStub);
    wrapper.setState({containsFruitChecked: true});
    expect(wrapper.find(Recipe).length).toEqual(2)
  });
  test('recipeFiler', () => {
    wrapper.instance().recipeFilter(recipesStub);
    wrapper.setState({containsVegetablesChecked: true});
    expect(wrapper.find(Recipe).length).toEqual(0)
  });
})
