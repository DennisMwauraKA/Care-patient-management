"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
export enum FormFieldTypes {
  INPUT = "input",
  TEXTAREA='textarea',
  PHONE_INPUT='phoneinput',
  CHECKBOX='checkbox',
  DATE_PICKER='datePicker',
  SELECT ='select',
  SKELETON='skeleton',

}
const formSchema = z.object({
  username: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

const PatientForms = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4 ">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first Appointment</p>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.INPUT}
          control={form.control}
          name='name'
          label='full name'
          placeholder='dennis'
          iconSrc="/assets/icon/user.svg"
          iconAlt= "user"
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForms;
