import React from "react";
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label for={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control form-value"/>
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
