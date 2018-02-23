import recipes from '../../../recipes.json';
const initialState = recipes;

export default(state = initialState, action) => {
  switch(action.type){
    case 'FAKE_ACTION': {
      return { ...state }
    }
    default:
      return state;
  }
}
