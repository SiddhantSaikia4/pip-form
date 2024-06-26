import * as yup from "yup";
import { AppointmentPlan } from "./models";
import "yup-phone";

const today = new Date();
today.setHours(0, 0, 0, 0);

export const validationSchema = yup.object().shape({
  title: yup.string().required().min(2).max(120).label("Title"),
  date: yup
    .date()
    .required()
    .min(today, "Date must be today or later")
    .label("Date"),
  plan: yup
    .string()
    .oneOf([AppointmentPlan.Basic, AppointmentPlan.Premium])
    .required()
    .label("Plan"),
  contact: yup.object({
    firstName: yup.string().required().min(2).max(120).label("First name"),
    lastName: yup.string().required().min(2).max(120).label("Last name"),
    phoneNumber: yup.string().required().phone().label("Phone number"),
    email: yup.string().email().label("Email"),
    callMeBack: yup.boolean().required().label("Callback"),
  }),
  pets: yup.array(
    yup.object({
      name: yup.string().required().min(2).max(120).label("Name"),
      breed: yup.string().required().min(2).max(120).label("Breed"),
      description: yup.string().min(2).max(120).label("Description"),
    })
  ),
});
