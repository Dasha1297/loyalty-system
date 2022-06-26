import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import {
  IconButton,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { Card } from "../../models/Card";
import { Column } from "../../models/Column";
import Pagination from "./TablePagination/Pagination";
import MenuBlock from "../MenuBlock/MenuBlock";
import { Transaction } from "../../models/Transaction";
import { Receipt } from "../../models/Receipt";

export type TablePropsType = {
  columns: Array<Column>;
  rows: Array<Card | Transaction | Receipt>;
  isMenu?: boolean;
};
const Table = ({ columns, rows, isMenu = false }: TablePropsType) => {
  const [page, setPage] = useState(0);
  const [anchorMenuEl, setAnchorMenuEl] = useState<null | HTMLElement>(null);
  const [card_uuid, setCard_uuid] = useState("");

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    setAnchorMenuEl(event.currentTarget);
    setCard_uuid(id);
  };

  const handleCloseRowMenu = () => setAnchorMenuEl(null);

  return (
    <Paper sx={{ width: 1000, overflow: "hidden", m: "auto", mt: 5 }}>
      <TableContainer>
        <table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * 10, page * 10 + 10).map((row) => {
              return (
                <TableRow key={row.uuid}>
                  {columns.map((column) => {
                    const key = column.id;
                    const value =
                      row[key as keyof (Card | Transaction | Receipt)];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {value !== null ? value.toString() : "-"}
                      </TableCell>
                    );
                  })}
                  {isMenu && (
                    <TableCell>
                      <IconButton onClick={(e) => handleClick(e, row.uuid)}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </IconButton>
                      <MenuBlock
                        anchorEl={anchorMenuEl}
                        card_uuid={card_uuid}
                        handleClose={handleCloseRowMenu}
                      />
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </table>
      </TableContainer>
      <Pagination
        page={page}
        handleChangePage={handleChangePage}
        count={rows.length}
      />
    </Paper>
  );
};

export default Table;
