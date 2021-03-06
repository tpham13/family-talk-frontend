import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk  from 'redux-thunk';

import users from './reducers/users.js';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginForm';
import signupForm from './reducers/signupForm';
import posts from './reducers/posts';
import postForm from './reducers/postForm.js'

const reducer = combineReducers({
    users,
    currentUser,
    loginForm,
    signupForm,
    posts,
    postForm
  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store; 