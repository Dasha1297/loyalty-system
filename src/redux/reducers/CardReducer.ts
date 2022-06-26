import { AnyAction } from "redux";

const defaultState = {
  cards: [],
};

const cardReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case "setCards":
      return { cards: action.payload };
    default:
      return state;
  }
};

export default cardReducer;
