import React from "react";
import { Button } from "reactstrap";

export const CButton = ({ text, outline, color, onClick }) => {
  return (
    <Button color={color} outline={outline} onClick={onClick}>
      {text}
    </Button>
  );
};

export default CButton;
