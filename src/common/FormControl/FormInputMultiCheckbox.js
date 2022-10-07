import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { Controller, useController } from "react-hook-form";

const options = [
  {
    label: "Checkbox Option 1",
    value: "1",
  },
  {
    label: "Checkbox Option 2",
    value: "2",
  },
  {
    label: "Checkbox Option 3",
    value: "3",
  },
];

export const FormInputMultiCheckbox = ({
  name,
  control,
  setValue,
  label,
  errors,
  helperText,
}) => {
  const {
    field: { onChange, value },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  // console.log(onChange);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      onChange(setSelectedItems((prevItems) => [...prevItems, value]));
    }
  };

  useEffect(() => {
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <>
      <FormControl size={"small"} variant={"outlined"} error={!!error}>
        <FormLabel component="legend">{label}</FormLabel>

        <div>
          {options.map((option) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    key={option.value}
                    checked={selectedItems.includes(option.value)}
                    onChange={() => handleSelect(option.value)}
                  />
                }
                label={option.label}
                key={option.value}
              />
            );
          })}
        </div>
        <FormHelperText>{error?.message}</FormHelperText>
      </FormControl>
    </>
  );
};
