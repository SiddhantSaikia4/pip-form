import React from "react";
import { AppointmentPlan } from "../models";
import { TextInput } from "./TextInput";
import { SelectInput, SelectInputOption } from "./SelectInput";
import { DateInput } from "./DateInput";

const planOptions: SelectInputOption[] = [
  {
    title: "Basic plan",
    value: AppointmentPlan.Basic,
  },
  {
    title: "Premium plan",
    value: AppointmentPlan.Premium,
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
          <TextInput name="title" label="Title*" placeholder="Enter" />
        </div>
        <div>
          <DateInput name="date" label="Date*" placeholder="Select date" />
        </div>
        <div>
          <SelectInput
            name="plan"
            label="Plan"
            placeholder="Select plan"
            options={planOptions}
          />
        </div>
      </div>
    </section>
  );
};
