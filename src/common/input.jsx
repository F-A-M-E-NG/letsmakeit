import React from "react";
import { Form } from "reactstrap";
const Input = ({ name, label, error, ...rest }) => {
  return (


    // <Form.Group className="pb-2">
    //     <Form.Label htmlFor={name}>{label}</Form.Label>
    //     <Form.Control {...rest} name={name} id={name} />
    //     {error && <div className="alert alert-danger">{error}</div>}
    // </Form.Group>
    <div className="form-group">
      <label for={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control form-value"/>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>

    // <div className="form-group">
    //   <label htmlFor={name}>{label}</label>
    //   <input {...rest} name={name} id={name} className="form-control" />
    //   {error && <div className="alert alert-danger">{error}</div>}
    // </div>
  );
};

export default Input;
