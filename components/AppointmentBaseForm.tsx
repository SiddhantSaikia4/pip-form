import React from "react";
import { EmployeePosition } from "../models";
import { TextInput } from "./TextInput";
import { SelectInput, SelectInputOption } from "./SelectInput";
import { DateInput } from "./DateInput";

const planOptions: SelectInputOption[] = [
  {
    title: "Senior Manager",
    value: EmployeePosition.Senior,
  },
  {
    title: "Software Engineer",
    value: EmployeePosition.Junior,
  },
  {
    title: "Asociate Software Engineer",
    value: EmployeePosition.Asociate,
  },
];

export const AppointmentBaseForm = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
  };

  const fullWidthStyle = {
    gridColumn: "span 2",
  };

  return (
    <section>
      <div style={containerStyle}>
        <div style={fullWidthStyle}>
          <TextInput name="title" label="Department*" placeholder="Enter" />
        </div>
        <div>
          <DateInput name="date" label="Date*" placeholder="Select date" />
        </div>
        <div>
          <SelectInput
            name="plan"
            label="Position"
            placeholder="Select Position"
            options={planOptions}
          />
        </div>
      </div>
    </section>
  );
};
