import React from "react";
import { useFormContext, UseFormProps, UseFormReturn } from "react-hook-form";
import { Appointment } from "../models";
import { TextInput } from "./TextInput";
import { CheckboxInput } from "./CheckboxInput";

export const AppointmentContactForm = () => {
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
    fontSize: "1.125rem", // equivalent to 'text-lg'
  };

  return (
    <section>
      <h2 style={headingStyle}>Contact information</h2>
      <div style={containerStyle}>
        <div>
          <TextInput
            name="contact.firstName"
            label="First name*"
            placeholder="Enter"
          />
        </div>
        <div>
          <TextInput
            name="contact.lastName"
            label="Last name*"
            placeholder="Enter"
          />
        </div>
        <div>
          <TextInput
            name="contact.phoneNumber"
            label="Phone number*"
            placeholder="Enter"
          />
        </div>
        <div>
          <TextInput name="contact.email" label="Email" placeholder="Enter" />
        </div>
        <div style={fullWidthStyle}>
          <CheckboxInput
            name="contact.callMeBack"
            label="Call me back to confirm my order"
          />
        </div>
      </div>
    </section>
  );
};
