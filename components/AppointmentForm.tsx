import React, { useState } from "react";
import { useForm, UseFormProps, UseFormReturn, FormProvider } from "react-hook-form";
import { Appointment, EmployeePosition, Goals } from "../models";
import { AppointmentBaseForm } from "./AppointmentBaseForm";
import { AppointmentContactForm } from "./AppointmentContactForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { AppointmentPets } from "./AppointmentPets";
import { DevTool } from "@hookform/devtools";
import { RagForm } from "./RagForm";

const defaultValues: Appointment = {
  title: "",
  date: new Date().toString(),
  plan: EmployeePosition.Senior,
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
  rag: [
    {
      date: "",
      actiontaken: "",
      goalsmet: Goals.Partially,
      observation: "",
    }
  ]
};

export const AppointmentForm = () => {
  const [submittedData, setSubmittedData] = useState<Appointment | null>(null);
  console.log(submittedData, 'submitted');
  // console.log(submittedData.rag, 'submitted');
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

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(submitForm)}>
        <Typography variant="h4" component="h1" style={{ fontWeight: 600, marginBottom: "1.5rem", textAlign: "center" }}>
          Create a new PIP 
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: "1rem" }}>
              <AppointmentBaseForm />
              <AppointmentPets />
              <AppointmentContactForm />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} style={{ padding: "1rem" }}>
              <RagForm />
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Button type="submit" variant="outlined" fullWidth>
              Submit
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button type="button" variant="contained" fullWidth onClick={resetForm}>
              Save
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button type="button" variant="text" fullWidth onClick={resetForm}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12}>
            {submittedData && (
              <Paper elevation={3} style={{ padding: "1rem", marginTop: "2rem" }}>
                <Typography variant="h6" component="h2" style={{ fontWeight: 600, marginBottom: "1rem" }}>
                  Submitted Data
                </Typography>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #E5E7EB" }}>
                  <thead>
                    <tr>
                      <th style={{ border: "1px solid #E5E7EB", padding: "0.5rem", backgroundColor: "#F9FAFB" }}>
                        Field
                      </th>
                      <th style={{ border: "1px solid #E5E7EB", padding: "0.5rem", backgroundColor: "#F9FAFB" }}>
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Department</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.title}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Start Date</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>
                        {new Date(submittedData.date).toLocaleString()}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Position</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.plan}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Reporting Group</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.contact.firstName}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Reporting/Resource Manager</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.contact.lastName}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Email</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.contact.email}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Phone Number</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.contact.phoneNumber}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Goals met</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.rag.goalsmet}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>End Date</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{           new Date(submittedData.rag.Enddate).toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Actions Taken</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.rag.actionsTaken}</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Observations</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{submittedData.rag.observations}</td>
                    </tr>
                    <tr>
  <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Color</td>
  <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>
    <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: submittedData.rag.color, marginRight: "0.5rem", border: "1px solid #000" }}></span>
    {/* {submittedData.rag.color} */}
  </td>
</tr>
                    <tr>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Expectations Met</td>
                      <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>
                        {submittedData.contact.callMeBack ? "Yes" : "No"}
                      </td>
                    </tr>
                    {submittedData.pets.map((pet, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Employee Name</td>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{pet.name}</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Improvement Plan</td>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{pet.breed}</td>
                        </tr>
                        <tr>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>Evaluation process</td>
                          <td style={{ border: "1px solid #E5E7EB", padding: "0.5rem" }}>{pet.description}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                    
                  </tbody>
                </table>
              </Paper>
            )}
          </Grid>
        </Grid>
      </form>
      <DevTool control={form.control} />
    </FormProvider>
  );
};

export default AppointmentForm;
