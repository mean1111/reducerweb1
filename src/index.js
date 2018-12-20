import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux';
import * as actions from './actions';

const store = createStore(reducers);
//위 store 구문은 암기해

console.log(store.getState());

store.subscribe(()=>console.log(store.getState()));

store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
store.dispatch(actions.setColor([200,200,200]));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
