import React from "react";
import { Col, Label } from "reactstrap";
export const DropDownCu = ({ label, data, onchange, name }) => {
  // const onc = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <Col className="align-self-center">
      <Label>{label}</Label>
      <br></br>
      <select
        style={{
          width: "85%",
          height: 38,
          border: "1px solid #e9ecef",
          borderRadius: "5px",
          outline: 0,
        }}
        name={name}
        onClick={onchange.bind()}
      >
        <option value=""></option>
        {data.map((item) => {
          return <option value={item.value}>{item.name}</option>;
        })}
      </select>
    </Col>
  );
};
