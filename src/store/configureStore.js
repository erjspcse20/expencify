import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducer/expenses';
import filtersReducer from '../reducer/filter';
import thunk from 'redux-thunk';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Store creation
export default () => {
    const store = createStore(
        combineReducers({
          expenses: expensesReducer,
          filters: filtersReducer
        }),
        composeEnhencers(applyMiddleware(thunk))
       // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//by  commenting it we can loose some functionality so we have to add composer enhencer to make all functionality make work
      );
    return store;
}
