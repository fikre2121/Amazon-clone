import { useReducer } from "react";
import { type } from "./Action.type";

export const initialstate = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TOA_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item], 
      };

    default:
      return state;
  }
};

// const[state,dispatch]=useReducer(reducer,initialstate)
