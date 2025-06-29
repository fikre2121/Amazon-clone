import React, { createContext, useReducer } from "react";
import { initialstate, reducer } from "../../Utility/reducer";
export const Datacontext = createContext();

const DataProvider = ({ children}) => {
  const [state, dispatch] = useReducer(reducer, initialstate);


  return (
    <Datacontext.Provider value={{state,dispatch}}>
      {children}
    </Datacontext.Provider>
  );
};

export default DataProvider;
