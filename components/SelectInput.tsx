import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  useController,
  UseControllerReturn,
  useFormContext,
} from "react-hook-form";
import { InputProps } from "./TextInput";

export interface SelectInputOption {
  value: string;
  title: string;
}

export interface SelectInputProps extends InputProps {
  options: SelectInputOption[];
}

export const SelectInput = (props: SelectInputProps) => {
  const { control } = useFormContext();

  const controller: UseControllerReturn = useController({
    name: props.name,
    control,
  });

  return (
    <FormControl fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        variant="outlined"
        id={props.name}
        label={props.label}
        placeholder={props.placeholder}
        onChange={controller.field.onChange}
        onBlur={controller.field.onBlur}
        name={controller.field.name}
        value={controller.field.value}
        ref={controller.field.ref}
      >
        {props.options.map((option: SelectInputOption) => (
          <MenuItem key={option.value} value={option.value}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
