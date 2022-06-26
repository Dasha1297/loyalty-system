import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

type DatePickerPropsType = {
  label: string;
  handleChange: (newValue: Date | null) => void;
  value: Number | null;
};

const DatePicker = ({ label, handleChange, value }: DatePickerPropsType) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label={label}
        inputFormat='dd/MM/yyyy'
        onChange={handleChange}
        value={value !== null ? value : Date()}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
