import React from "react";
import { Controller, useFormContext, useController } from "react-hook-form";
import { TextField } from "@mui/material";

export const FormInputText = ({ name, control, label }) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <TextField
      helperText={error ? error.message : null}
      size="small"
      error={!!error}
      onChange={onChange}
      value={value}
      fullWidth
      label={label}
      variant="outlined"
    />
  );
};
