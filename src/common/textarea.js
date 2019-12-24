import React from 'react';
import {FormGroup, Label, Input }from 'reactstrap'
const Textarea = ({ name, label, error, ...rest }) => {
      return ( 
      <FormGroup>
        <Label for={name}>{label}</Label>
        <Input {...rest} name={name} id={name} type="textarea" placeholder={label}/>
      {error && <div className="alert alert-danger">{error}</div>}
      </FormGroup>
       );
}
 
export default Textarea;
