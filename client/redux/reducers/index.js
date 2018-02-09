const initialState = {
  myState: 'I AM THE STATE IN BOLD'
};

export default(state = initialState, action) => {
  switch(action.type){
    case 'FAKE_ACTION': {
      return { ...state }
    }
    default:
      return state;
  }
}
