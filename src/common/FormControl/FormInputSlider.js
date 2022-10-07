import React, { useEffect } from "react";
import { FormControl, FormHelperText, FormLabel, Slider } from "@mui/material";
import { Controller, useController } from "react-hook-form";

export const FormInputSlider = ({
  name,
  control,

  label,
}) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <FormControl error={!!error}>
        <FormLabel component="legend">{label}</FormLabel>

        <Slider value={value} onChange={onChange} min={0} max={100} />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </>
  );
};
