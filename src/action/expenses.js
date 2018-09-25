import uuid from 'uuid';
import database from '../firebase/firebase';
import expenses from '../reducer/expenses';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });
  };
};

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

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};

// import { database } from '../firebase/firebase';

// //action to database

// //component call action generator
// //action genrator return object
// //component dispaches object
// //redux store change

// //to do above procedure we nned to do below procedure in redux way

// //component call action generator
// //action genarator return function
// //component dispaches function(?)
// //function runs(has the ablity to dispatch order action and do whatever it wants)


// //for this we need to intall some tool like redux-thunk which is middlware for redux npm install redux-thunk and add it to reconfigur strore of redux

// // ADD_EXPENSE

// export const addExpense = (expense) => ({
//     type: 'ADD_EXPENSE',
//     expense
//   });

// export const startAddExpense = (expenseData = {}) => {
//   return (dispatch) => {
//     const {
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     } = expenseData;
//     const expense = { description, note, amount, createdAt };

//     database.ref('expenses').push(expense)
//       .then((ref) => {
//         dispatch(addExpense({
//           id: ref.key,
//           ...expense
//       }));
//     });
//   };
// };

// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

// // REMOVE_EXPENSE
// export const removeExpense = ({ id } = {}) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// // EDIT_EXPENSE
// export const editExpense = (id, updates) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// });