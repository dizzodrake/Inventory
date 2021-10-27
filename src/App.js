import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Admin from './components/Admin';
import Landing from './components/Landing';
import Nav from './components/Nav';
import User from './components/User';
import './components/Components.css'

import { useSelector, useDispatch } from "react-redux";
import ReduxFunc from "./components/ReduxFunc";


const App = ()=>{
  const [goods, setGoods] = useState([]);
  const deleteGood = i=>{
    let newGoods = goods.filter((_, ind)=>i!==ind);
    setGoods(newGoods);
 }
 const addGood = good=>{
  setGoods([...goods, good]);
}
const deductGood = goodsToDeduct =>{
  let getAllGoods = [...goods];
  for (let index = 0; index < getAllGoods.length; index++) {
    for (let i = 0; i < goodsToDeduct.length; i++) {
      if(index === goodsToDeduct[i].index && getAllGoods[index].goodQty>= goodsToDeduct[i].qty){
        getAllGoods[index].goodQty -=goodsToDeduct[i].qty; 
      }
      
    }
    
  }
  setGoods(getAllGoods);
}
return(

  <div className='Landing'>
  <Nav/>
  <br/>
  <Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/admin" render={(props)=><Admin {...props} goods={goods} deleteGood={deleteGood} addGood={addGood}/>}/>
    <Route path="/user" render={(props)=><User {...props} goods={goods} deductGood={deductGood}/>}/>
  </Switch>


    
  </div>
)
}
export default App;


// <ReduxFunc/>

// const App = () =>{
//   let myVal = useSelector(state=>state);
//   let dispatch = useDispatch();
//   const increment = (payload)=>{
//     return {type: "INCREMENT", payload}
//   }

//   return (
//     <>
//     i have {myVal} houses
//     <button onClick={()=>dispatch(increment(1))}>increase</button>
//     <button onClick={()=>dispatch(increment(2))}>increase by two</button>
//     <button onClick={()=>dispatch(increment(3))}>increase by three</button>
//     <button onClick={()=>dispatch({type: 'DECREMENT', payload: 2})}>derease</button>
//     </>
//   )
// }

// export default App