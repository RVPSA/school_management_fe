import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export const TextInputField = ({
  label,
  formFeedBack,
  onChange,
  invalid,
  name,
  placeholder,
}) => {
  return (
    <FormGroup>
      <Label>{label}</Label>
      <Input
        onChange={onChange}
        invalid={invalid}
        name={name}
        placeholder={placeholder}
      ></Input>
      <FormFeedback invalid={invalid}> {formFeedBack}</FormFeedback>
    </FormGroup>
  );
};

export default TextInputField;
