import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

const AppReducer = combineReducers({
    form,
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    AppReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
