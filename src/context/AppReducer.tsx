import React from "react";
import { iAction, iState, iTrans } from "../Types/Types";
const AppReducer = (state: iState, action: iAction) => {
  switch (action.type) {
    case "DELETE-TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD-TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
export default AppReducer;
