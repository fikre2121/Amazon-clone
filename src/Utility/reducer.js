import { useReducer } from "react";
import { type } from "./Action.type";

export const initialstate = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case type.ADD_TOA_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id == action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else{
        const updatedBasket=state.basket.map((item)=>{
          return item.id=== action.item.id?{...item,amount:item.amount+1}:item

        })
        return{
          ...state,
          basket:updatedBasket
        }
      }

    default:
      return state;
  }
};

// const[state,dispatch]=useReducer(reducer,initialstate)
