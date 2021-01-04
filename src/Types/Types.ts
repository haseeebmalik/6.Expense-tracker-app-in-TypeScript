import { type } from "os";

export type iState = {
  transactions: Array<iTrans>;
};

export type iTrans = {
  id: number;
  text: string;
  amount: number;
};
export type iAction = {
  type: string;
  payload: any;
};
export type GlobalProvider1 = {
  children: any;
};
