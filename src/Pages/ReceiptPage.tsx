import { Column } from "../models/Column";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect, useState } from "react";
import { getReceipts } from "../redux/actions/ReceiptActions";
import { getCards } from "../redux/actions/CardActions";
import SearchBlock from "../components/SearchBlock/SearchBlock";
import DatePicker from "../components/SearchBlock/DatePicker/DatePicker";
import { Button, SelectChangeEvent } from "@mui/material";
import Table from "../components/Table/Table";
import SelectBlock from "../components/SearchBlock/Select/SelectBlock";
const ReceiptPage = () => {
  const columns: Column[] = [
    {
      id: "card_uuid",
      label: "id Карты",
    },
    {
      id: "user_uid",
      label: "id Клиента",
    },
    {
      id: "type",
      label: "Тип",
    },
    {
      id: "number",
      label: "Число",
    },
    {
      id: "period",
      label: "Период",
    },
    {
      id: "total",
      label: "Итог",
    },
    {
      id: "totalWithDiscount",
      label: "Итог со скидкой",
    },
    {
      id: "bonus",
      label: "Бонус",
    },
    {
      id: "payment",
      label: "Оплата",
    },
  ];

  let search = useLocation().search;
  const [searchParams] = useSearchParams();
  let card_uuid = searchParams.get("card_uuid");
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const navigate = useNavigate();

  if (card_uuid === null) {
    card_uuid = "";
  }

  const dispatch = useAppDispatch();
  const receipts = useAppSelector((state) => state.receiptReducer.receipts);
  const cards = useAppSelector((state) => state.cardReducer.cards);

  const [fromDate, setFromDate] = useState<Number | null>(Number(from));
  const [toDate, setToDate] = useState<Number | null>(Number(to));
  const [cardId, setCardId] = useState<string>(card_uuid);

  useEffect(() => {
    dispatch(getReceipts(search));
    dispatch(getCards());
  }, [dispatch, search]);

  const handleChangeDateFrom = (date: Date | null) => {
    setFromDate(Number(date));
  };
  const handleChangeDateTo = (date: Date | null) => {
    setToDate(Number(date));
  };
  const handleChangeCardId = (event: SelectChangeEvent) => {
    setCardId(event.target.value);
  };
  const handleClick = () => {
    navigate(`/receipt/?card_uuid=${cardId}&from=${fromDate}&to=${toDate}`);
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
        <SelectBlock
          defaultValue={cardId}
          label='card_uuid'
          options={cards}
          handleChange={handleChangeCardId}
        />
        <Button variant='contained' onClick={handleClick}>
          Найти
        </Button>
      </SearchBlock>
      <Table columns={columns} rows={receipts} />
    </div>
  );
};

export default ReceiptPage;
