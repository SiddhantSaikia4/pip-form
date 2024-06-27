import React from "react";
import { TextInput } from "./TextInput";
import { Button } from "@mui/material";

interface AppointmentPetFormProps {
  index: number;
  onRemove: (index: number) => void;
  disableRemoveButton: boolean;
}

export const AppointmentPetForm = ({
  index,
  onRemove,
  disableRemoveButton,
}: AppointmentPetFormProps) => {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1rem",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
    paddingBottom: "1.5rem",
  };

  const fullWidthStyle = {
    gridColumn: "span 2",
  };

  const labelStyle = {
    marginBottom: "0.5rem",
    color: "#9CA3AF", 
    fontWeight: "600",
  };

  return (
    <section>
      <div style={containerStyle}>
        {/* <p style={labelStyle}> {index + 1}</p> */}
        <Button
          color="error"
          variant="outlined"
          disabled={disableRemoveButton}
          onClick={() => onRemove(index)}
        >
          Remove
        </Button>
      </div>
      <div style={gridStyle}>
        <div>
          <TextInput
            name={`pets[${index}].name`}
            label="Employee Name*"
            placeholder="Enter"
          />
        </div>
        <div>
          <TextInput
            name={`pets[${index}].breed`}
            label="Improvement Plan*"
            placeholder="Enter"
          />
        </div>
        <div style={fullWidthStyle}>
          <TextInput
            name={`pets[${index}].description`}
            label="Evaluation Process"
            placeholder="Enter"
          />
        </div>
      </div>
    </section>
  );
};
