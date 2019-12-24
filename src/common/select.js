import React from "react";
import {FormGroup, Label, Input} from 'reactstrap'

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <FormGroup>
        <Label for={label}>{label}</Label>
        <Input type="select" name={name} id={name} {...rest}>
           <option selected value="">{label}</option>
         {options.map(option => (

      <option key={option.capital} value={option.name}>
      {option.name}
      </option>
      ))}
          >
        </Input>
         {error && <div className="alert alert-danger">{error}</div>}
      </FormGroup>
  );
};

export default Select;
