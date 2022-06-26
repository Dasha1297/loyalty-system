import { AppDispatch } from "./../store";
import { api } from "./../../api/api";
import { Transaction } from "../../models/Transaction";

export const changeDateFormat = (data: Transaction[]) => {
  data.forEach((element) => {
    if (element.period !== null) {
      element.period = new Date(Number(element.period)).toLocaleDateString();
    }
    if (element.period_activate !== null) {
      element.period_activate = new Date(
        Number(element.period_activate)
      ).toLocaleDateString();
    }
  });

  return data;
};

export const getTransactions =
  (search?: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await api.get(`/transaction/${search}`);
      const data: Transaction[] = response.data;
      const transactions = changeDateFormat(data);

      dispatch({ type: "setTransactions", payload: transactions });
    } catch (error) {
      console.log(error);
    }
  };
