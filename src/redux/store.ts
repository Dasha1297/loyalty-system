import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "./reducers/CardReducer";
import transactionReducer from "./reducers/TransactionReducer";
import receiptReducer from "./reducers/ReceiptReducer";

const rootReducer = combineReducers({
  cardReducer,
  transactionReducer,
  receiptReducer,
});
const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
