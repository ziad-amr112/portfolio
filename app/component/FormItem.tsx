"use client";
import { FormField, FormLabel, FormControl, FormMessage, FormItem } from "@/components/ui/form";
import React from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps {
  children: React.ReactNode;
  name: string;
}

const FormInput: React.FC<FormInputProps> = ({ children, name }) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={() => (
        <FormItem className="w-full">
          <FormLabel htmlFor={name} />
          <FormControl>{children}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
