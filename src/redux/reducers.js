// reducers/mcq.js
const initialState = {
    currentQuestion: 0,
    selectedOption: null,
    pendingAction: null, // Added new state property for pending action
  };
  
  const mcqReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_OPTION':
        return { ...state, selectedOption: action.payload };
      case 'SET_CURRENT_QUESTION':
        return { ...state, currentQuestion: action.payload };
      case 'SET_PENDING_ACTION':
        return { ...state, pendingAction: action.payload }; // Update state with pending action
      default:
        return state;
    }
  };
  
  export default mcqReducer;
  