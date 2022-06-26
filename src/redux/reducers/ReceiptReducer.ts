import { AnyAction } from "redux";
const defaultState = {
  receipts: [],
};

const receiptReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "setReceipts":
      return { ...state, receipts: action.payload };
    default:
      return state;
  }
};

export default receiptReducer;
