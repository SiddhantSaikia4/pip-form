import React, { useMemo } from "react";
import {
  useFieldArray,
  UseFieldArrayReturn,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { Button } from "@mui/material";
import { Appointment, AppointmentPlan } from "../models";
import { AppointmentPetForm } from "./AppointmentPetForm";

export const AppointmentPets = () => {
  const form = useFormContext<Appointment>();
  const petsField: UseFieldArrayReturn<Appointment> =
    useFieldArray<Appointment>({
      control: form.control,
      name: "pets",
    });

  const selectedPlan = useWatch({
    control: form.control,
    name: "plan",
  });

  const isPremiumSelected = useMemo(
    () => selectedPlan === AppointmentPlan.Premium,
    [selectedPlan]
  );

  const removePet = (index: number) => {
    if (petsField.fields.length === 1) {
      return;
    }

    petsField.remove(index);
  };

  const addNewPet = () => {
    if (!isPremiumSelected) {
      return;
    }

    petsField.append({
      name: "",
      breed: "",
      description: "",
    });
  };

  return (
    <section>
      <h2 className="font-semibold my-4 text-lg">Pets</h2>

      {petsField.fields.map((field, index) => (
        <AppointmentPetForm
          key={field.id}
          index={index}
          onRemove={removePet}
          disableRemoveButton={petsField.fields.length === 1}
        />
      ))}

      <Button
        type="button"
        variant="outlined"
        fullWidth
        className="mt-6"
        disabled={!isPremiumSelected}
        onClick={addNewPet}
      >
        Add another pet
      </Button>

      <p className="h-8 text-xs mt-2 text-center text-gray-400">
        {!isPremiumSelected &&
          "You should select Premium plan to add more than 1 pet"}
      </p>
    </section>
  );
};
