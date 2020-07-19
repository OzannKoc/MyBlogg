import React from "react";

const Input = (props) => {
  const { label, name, onChange, type } = props;
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className="form-control"
        name={name}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};
export default Input;
