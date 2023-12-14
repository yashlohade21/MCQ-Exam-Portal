export const setSelectedOption = (option) => ({
    type: 'SET_SELECTED_OPTION',
    payload: option,
  });
  
  export const setCurrentQuestion = (question) => ({
    type: 'SET_CURRENT_QUESTION',
    payload: question,
  });
  
  export const setPendingAction = (action) => ({
    type: 'SET_PENDING_ACTION',
    payload: action,
  });
  