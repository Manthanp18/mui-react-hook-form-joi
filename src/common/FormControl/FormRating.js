import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext, useController } from "react-hook-form";
import { FormControl, FormHelperText } from "@mui/material";
export function FormRating({ name, control, label }) {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}>
      <FormControl error={!!error}>
        <Typography component="legend">{label}</Typography>
        <Rating name="simple-controlled" value={value} onChange={onChange} />
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </Box>
  );
}
