import { useEffect } from "react";
import Table from "../components/Table/Table";
import { Card } from "../models/Card";
import { Column } from "../models/Column";
import { getCards } from "../redux/actions/CardActions";
import { useAppDispatch, useAppSelector } from "../redux/store";

const CardsPage = () => {
  const dispatch = useAppDispatch();
  const cards: Array<Card> = useAppSelector((state) => state.cardReducer.cards);
  const columns: Column[] = [
    { id: "number", label: "Число" },
    { id: "status", label: "Статус" },
    { id: "holder", label: "Держатель" },
    { id: "phone", label: "Телефон" },
    { id: "birthdate", label: "Дата рождения" },
    { id: "created_date", label: "Дата создания" },
    { id: "sales", label: "Скидка" },
    { id: "balance", label: "Баланс" },
  ];

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <div className='table'>
      <Table rows={cards} columns={columns} isMenu={true} />
    </div>
  );
};

export default CardsPage;
