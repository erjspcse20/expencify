import uuid from 'uuid';

//action to database

//component call action generator
//action genrator return object
//component dispaches object
//redux store change

//to do above procedure we nned to do below procedure in redux way

//component call action generator
//action genarator return function
//component dispaches function(?)
//function runs(has the ablity to dispatch order action and do whatever it wants)


//for this we need to intall some tool like redux-thunk which is middlware for redux npm install redux-thunk and add it to reconfigur strore of redux

// ADD_EXPENSE
export const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});