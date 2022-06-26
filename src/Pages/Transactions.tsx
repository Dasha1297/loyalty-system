import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getTransactions } from "../redux/actions/TransactionActions";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { Column } from "../models/Column";
import Table from "../components/Table/Table";
import SearchBlock from "../components/SearchBlock/SearchBlock";
import DatePicker from "../components/SearchBlock/DatePicker/DatePicker";
import { Button } from "@mui/material";

const Transactions = () => {
  const columns: Column[] = [
    {
      id: "card_uuid",
      label: "id Карты",
    },
    {
      id: "delta",
      label: "Delta",
    },
    {
      id: "state",
      label: "Состояние",
    },
    {
      id: "period",
      label: "Период",
    },
    {
      id: "period_activate",
      label: "Период активации",
    },
    {
      id: "comment",
      label: "Комментарий",
    },
  ];

  let search = useLocation().search;
  const [searchParams] = useSearchParams();
  const card_uuid = searchParams.get("card_uuid");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const transactions = useAppSelector(
    (state) => state.transactionReducer.transactions
  );

  const [fromDate, setFromDate] = useState<Number | null>(Number(from));
  const [toDate, setToDate] = useState<Number | null>(Number(to));

  useEffect(() => {
    dispatch(getTransactions(search));
  }, [dispatch, search]);

  const handleChangeDateFrom = (date: Date | null) => {
    setFromDate(Number(date));
  };
  const handleChangeDateTo = (date: Date | null) => {
    setToDate(Number(date));
  };
  const handleClick = () => {
    navigate(
      `/transaction/?card_uuid=${card_uuid}&from=${fromDate}&to=${toDate}`
    );
  };

  return (
    <div>
      <SearchBlock>
        <DatePicker
          label='from'
          handleChange={handleChangeDateFrom}
          value={fromDate}
        />
        <DatePicker
          label='to'
          handleChange={handleChangeDateTo}
          value={toDate}
        />
        <Button variant='contained' onClick={handleClick}>
          Найти
        </Button>
      </SearchBlock>
      <Table columns={columns} rows={transactions} />
    </div>
  );
};

export default Transactions;
