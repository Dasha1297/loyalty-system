import { AppDispatch } from "./../store";
import { api } from "./../../api/api";
import { Receipt } from "../../models/Receipt";

export const getReceipts =
  (search?: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await api.get(`/receipt/${search}`);
      const data: Receipt[] = response.data;

      dispatch({ type: "setReceipts", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
