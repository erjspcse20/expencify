import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './action/expenses';
// import { setTextFilter} from './action/filter';
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 400, createdAt: -1000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 2000, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1025000, createdAt: 200 }));
// store.dispatch(setTextFilter("as"));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);
//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));


// store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt: -1000 }));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 1000, createdAt: 1000 }));
// store.dispatch(setTextFilter("bill"));
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
// console.log(visibleExpenses);


//for testing purpose we use jest testing npm install --save-dev jest@20.0.4
//for testing of component use need to use react test randerer to see what exactly jsx return npm install react-test-renderer@16.0.0
//alternative way is enzime to test component it gives alot of feature  npm install enzyme@3.0.0
//enzime require additional library npm install enzyme-adapter-react-16@1.0.0 and request animation fram 
//npm install raf@3.3.2 also we need  npm install enzyme-to-json@3.0.1


//adding your project to git
//git init //install ssh key\
//eval "$(ssh-agent -s)"