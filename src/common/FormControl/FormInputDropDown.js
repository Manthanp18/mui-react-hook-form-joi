import React from "react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useFormContext, Controller, useController } from "react-hook-form";

const options = [
  {
    label: "Dropdown Option 1",
    value: "1",
  },
  {
    label: "Dropdown Option 2",
    value: "2",
  },
];

export const FormInputDropdown = ({ name, control, label, helperText }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  const generateSingleOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl size={"small"} error={!!error}>
      <InputLabel>{label}</InputLabel>
      <>
        <Select onChange={onChange} value={value}>
          {generateSingleOptions()}
        </Select>
        <FormHelperText>{error?.message}</FormHelperText>
      </>
    </FormControl>
  );
};
