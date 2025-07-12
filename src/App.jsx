import { useContext, useEffect, useState } from 'react'
import Home from "./pages/Home/Home"
import './App.css'
import Routering from './Router'
import { Datacontext } from './Components/DataProvider/DataProvider'
import { type } from './Utility/Action.type' 
import {auth} from './Utility/Firebase'
function App() {
const { state, dispatch } = useContext(Datacontext);
  const { user } = state;
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{


if(authUser){
dispatch({

  type:type.SET_USER,
  user:authUser
})
}else{
  dispatch({
    type: type.SET_USER,
    user: null,
  });
}


})
},[])

  return (<Routering/>)
}

export default App
