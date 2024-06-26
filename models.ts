export interface Appointment {
  id?: string;
  title: string;
  date: string;
  plan: AppointmentPlan;
  description?: string;
  contact: ContactInfo;
  pets: Pet[];
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email?: string;
  callMeBack?: boolean;
}

export interface Pet {
  name: string;
  breed: string;
  description?: string;
}

export enum AppointmentPlan {
  Basic = "Basic",
  Premium = "Premium",
}
