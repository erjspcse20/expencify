import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../action/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);



// import React from 'react';
// import ExpenseForm from './ExpenseForm';
// import { connect } from 'react-redux';
// import { startAddExpense } from '../action/expenses';

// export class AddExpensePage extends React.Component{
//   onSubmit= (expense) => {
//     this.props.startAddExpense(expense);
//     this.props.history.push('/');
//     //u can switch over any page using this it is not going to refrsh page
//   };
//   render() {
//     return (
//       <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//           onSubmit={this.onSubmit}        
//         />
//       </div>
//     );
//   }
// }

// const mapDispachToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense))
// });
// export default connect(undefined, mapDispachToProps)(AddExpensePage);
