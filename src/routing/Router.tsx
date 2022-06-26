import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "../Pages/CardsPage";
import ReceiptPage from "../Pages/ReceiptPage";
import Transactions from "../Pages/Transactions";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardsPage />} />
        <Route path='/transaction' element={<Transactions />} />
        <Route path='/receipt' element={<ReceiptPage />} />
      </Routes>
    </BrowserRouter>
  );
};
