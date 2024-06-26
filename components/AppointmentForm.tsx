import React, { useState } from "react";
import {
  useForm,
  UseFormProps,
  UseFormReturn,
  FormProvider,
} from "react-hook-form";
import { Appointment, AppointmentPlan } from "../models";
import { AppointmentBaseForm } from "./AppointmentBaseForm";
import { AppointmentContactForm } from "./AppointmentContactForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";
import { Button } from "@mui/material";
import { AppointmentPets } from "./AppointmentPets";
import { DevTool } from "@hookform/devtools";

const defaultValues: Appointment = {
  title: "",
  date: new Date().toString(),
  plan: AppointmentPlan.Basic,
  contact: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    callMeBack: false,
  },
  pets: [
    {
      name: "",
      breed: "",
      description: "",
    },
  ],
};

export const AppointmentForm = () => {
  const [submittedData, setSubmittedData] = useState<Appointment | null>(null);

  const form: UseFormReturn<Appointment, UseFormProps> = useForm<Appointment>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const submitForm = (data: Appointment) => {
    setSubmittedData(data);
  };

  const resetForm = () => {
    form.reset(defaultValues);
    setSubmittedData(null);
  };

  const headingStyle = {
    fontWeight: "600",
    marginBottom: "1.5rem",
    fontSize: "1.5rem",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginTop: "1rem",
  };

  const tableContainerStyle = {
    marginTop: "2rem",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #E5E7EB", 
  };

  const thStyle = {
    border: "1px solid #E5E7EB",
    padding: "0.5rem",
    backgroundColor: "#F9FAFB", 
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #E5E7EB",
    padding: "0.5rem",
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <h1 style={headingStyle}>Create a new appointment</h1>

        <AppointmentBaseForm />
        <AppointmentPets />
        <AppointmentContactForm />

        <div style={buttonContainerStyle}>
          <div style={{ flex: 1 }}>
            <Button type="button" variant="text" fullWidth onClick={resetForm}>
              Clear
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <Button type="submit" variant="outlined" fullWidth>
              Make an appointment!
            </Button>
          </div>
        </div>
      </form>

      {submittedData && (
        <div style={tableContainerStyle}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Submitted Data</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Field</th>
                <th style={thStyle}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Title</td>
                <td style={tdStyle}>{submittedData.title}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Date</td>
                <td style={tdStyle}>{new Date(submittedData.date).toLocaleString()}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Plan</td>
                <td style={tdStyle}>{submittedData.plan}</td>
              </tr>
              <tr>
                <td style={tdStyle}>First Name</td>
                <td style={tdStyle}>{submittedData.contact.firstName}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Last Name</td>
                <td style={tdStyle}>{submittedData.contact.lastName}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Email</td>
                <td style={tdStyle}>{submittedData.contact.email}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Phone Number</td>
                <td style={tdStyle}>{submittedData.contact.phoneNumber}</td>
              </tr>
              <tr>
                <td style={tdStyle}>Call Me Back</td>
                <td style={tdStyle}>{submittedData.contact.callMeBack ? "Yes" : "No"}</td>
              </tr>
              {submittedData.pets.map((pet, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td style={tdStyle}>Pet Name</td>
                    <td style={tdStyle}>{pet.name}</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Breed</td>
                    <td style={tdStyle}>{pet.breed}</td>
                  </tr>
                  <tr>
                    <td style={tdStyle}>Description</td>
                    <td style={tdStyle}>{pet.description}</td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <DevTool control={form.control} />
    </FormProvider>
  );
};

export default AppointmentForm;
