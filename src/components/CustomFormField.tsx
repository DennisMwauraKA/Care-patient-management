"use client";

import React from "react";
import { Control } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldTypes } from "./Forms/PatientForms";
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldTypes;
  name:string,
  label?:string,
  placeholder?:string,
  iconSrc?:string,
  iconAlt?:string,
  dateFormat?:string,
  showTimeSelect?:string,
  children?:React.ReactNode,
  renderSkeleton?:(field:any)=>React.ReactNode,
}
const RenderField=({field,props}:{field:any; props:CustomProps})=>{
  return(
    <Input
    type='text'
    placeholder="dennisjoe"
    />
  )
}
const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name,label }=props;
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {fieldType !== FormFieldTypes.CHECKBOX && label && (
              <FormLabel>{label}</FormLabel>
            )}
            <RenderField field={field}props={props}/>
            <FormMessage className="shad-error"/>
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomFormField;
