// Main reducer of the application

// Initial state
const initialState = {
  title: 'React'
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return Object.assign({}, state, { title: action.title });
    default:
      return state;
  }
}

// Export the reducer
export default reducer;
