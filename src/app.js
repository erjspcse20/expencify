import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './action/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';

const store = configureStore();

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});



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
//extract text webpack plugin- it allow us to extract some text outside the bundle.js
//we can extract the css file out of bundule.js
//npm install --save-dev extract-text-webpack-plugin

//install express for devlopment server 


//use heroku. to deployee app
//dowload heroku cli instal 
//run heroku login
//heroku create expencify-app
//git push heroku master
//for devlopment dependency which is not use as devlopment server use npm install chalk --dev
//to install dependency of production server use npm install --production
//use numeral js to modify currency format numeraljs.com  npm install numeral@2.0.6


//database
//install firebase database npm install firebase