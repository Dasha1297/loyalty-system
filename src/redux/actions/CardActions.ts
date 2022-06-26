import { AppDispatch } from "./../store";
import { api } from "./../../api/api";

export const getCards = () => async (dispatch: AppDispatch) => {
  try {
    const response = await api.get("/card");
    const data = response.data;
    dispatch({ type: "setCards", payload: data });
  } catch (error) {
    console.log(error);
  }
};
