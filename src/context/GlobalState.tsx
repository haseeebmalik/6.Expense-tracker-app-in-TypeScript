import React, { createContext, useReducer, Children } from "react";
import AppReducer from "./AppReducer";
import { iTrans, iState, GlobalProvider1 } from "../Types/Types";

const initialState: iState = {
  transactions: [],
};
// create context
export const GlobalContext = createContext<iState | any>(initialState);
//create provider component
export const GlobalProvider: React.FC<GlobalProvider1> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //action
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE-TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction: iTrans) {
    dispatch({
      type: "ADD-TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
