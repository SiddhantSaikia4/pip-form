export interface Appointment {
  id?: string;
  title: string;
  date: string;
  plan: EmployeePosition;
  rag : RagForm[];
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

export interface RagForm{
  date: string;
  actiontaken: string;
  goalsmet: Goals;
  observation: string;
}

export interface Pet {
  name: string;
  breed: string;
  description?: string;
}

export enum EmployeePosition {
  // Basic = "Basic",
  // Premium = "Premium",
  Senior = "Senior Manager",
  Junior = "Junior Engineer",
  Asociate = "Asociate Engineer",
}

export enum Goals {
  Yes = "Yes",
  No = "No",
  Partially = "Partially",
}