import { FormControl } from "@mui/material";
import { ReactNode } from "react";
import style from "./style.module.css";

type SearchBlockPropsType = {
  children: ReactNode;
};
const SearchBlock = ({ children }: SearchBlockPropsType) => {
  return (
    <FormControl fullWidth className={style.block} sx={{ m: "auto" }}>
      {children}
    </FormControl>
  );
};

export default SearchBlock;
