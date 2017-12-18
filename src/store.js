import { createStore } from 'redux';

const reducer = state => state;

const initialState = {
  loggedInAs: 'ty',
  isCreditCardHolder: true,
}

const store = createStore(reducer, initialState);

export default store;