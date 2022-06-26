import { AnyAction } from "redux";
const defaultState = {
  transactions: [],
};

const transactionReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "setTransactions":
      return { ...state, transactions: action.payload };
    default:
      return state;
  }
};

export default transactionReducer;
