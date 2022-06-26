import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Card } from "../../../models/Card";

type SelectPropsType = {
  label: string;
  defaultValue?: string;
  options: Array<Card>;
  handleChange: (e: SelectChangeEvent) => void;
};
const SelectBlock = ({
  label,
  defaultValue,
  options,
  handleChange,
}: SelectPropsType) => {
  return (
    <FormControl variant='standard' sx={{ minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select defaultValue={defaultValue} onChange={handleChange} label={label}>
        {options.map((card) => (
          <MenuItem value={card.uuid}>{card.uuid}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBlock;
