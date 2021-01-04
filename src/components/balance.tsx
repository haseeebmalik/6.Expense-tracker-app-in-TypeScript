import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { iTrans } from "../Types/Types";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction: iTrans) => transaction.amount);
  console.log(amounts);
  const results = amounts
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);
  return (
    <>
      <h4>your balance</h4>
      <h1>${results}</h1>
    </>
  );
};
