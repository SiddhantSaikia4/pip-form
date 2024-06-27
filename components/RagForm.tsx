import React from "react";
import { useFormContext, UseFormProps, UseFormReturn } from "react-hook-form";
import { Appointment } from "../models";
import { TextInput } from "./TextInput";
import { DateInput } from "./DateInput";
import { SelectInput, SelectInputOption } from "./SelectInput";
import ColorPicker from "./ColorPicker";
import ColorPickers from "./ColorPicker";

export const RagForm = () => {
  const form: UseFormReturn<Appointment, UseFormProps> = useFormContext();

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
  };

  const fullWidthStyle = {
    gridColumn: "span 2",
  };

  const headingStyle = {
    fontWeight: "600",
    margin: "1rem 0",
    fontSize: "1.125rem",
  };

  const planOptions: SelectInputOption[] = [
    { value: "yes", title: "Yes" },
    { value: "no", title: "No" },
    { value: "partially", title: "Partially" },
  ];

  return (
    <section>
      <h2 style={headingStyle}>Actions Taken</h2>
      <div style={containerStyle}>
        <div>
          <DateInput
            name="rag.Enddate"
            label="End-Date*"
            placeholder="End Date"
          />
        </div>
        <div>
          <TextInput
            name="rag.actionsTaken"
            label="Actions Taken*"
            placeholder="Enter actions taken"
          />
        </div>
        <div>
          <SelectInput
            name="rag.goalsmet"
            label="Goals Met"
            placeholder="Select"
            options={planOptions}
          />
        </div>
        <div>
          <ColorPickers name="rag.color" label="Select Color" />
        </div>
        <div style={fullWidthStyle}>
          <TextInput
            name="rag.observations"
            label="Observations"
            placeholder="Enter observations"
          />
        </div>
      </div>
    </section>
  );
};
