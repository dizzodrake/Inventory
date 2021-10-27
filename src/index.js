import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';

// const myInitialState = 0;
// const myReducer = (myState = myInitialState, myAction)=>{

//   switch (myAction.type) {
//     case "INCREMENT":
//       return myState + myAction.payload
//       // break;
//     case "DECREMENT":
//       return myState -myAction.payload
//     default:
//       break;
//   }

//   if (myAction.type==='INCREMENT') {
//     return myState +myAction.payload;
//   } else if (myAction.type==='DECREMENT') {
//     return myState -1;
//   } else {
//     return myState
//   }
// }
// const secondInitial = "Taiwo"
// const student = (state=[], action)=>{
//   return state
// }
// const school = (state="SQI", action) => {
//   if(action.type === "CHANGESCHOOL"){
//     return action.school
//   }
//   return state
// }
// let a = {school, student};
// const allReducer = combineReducers(a);
// const myStore  = createStore(allReducer, applyMiddleware(thunk));
// const myStore = createStore(myReducer);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Provider store={myStore}> */}
      <App />
    {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
