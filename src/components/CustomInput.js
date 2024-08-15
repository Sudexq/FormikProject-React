import React from "react";
import { useField } from "formik";

function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);
  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default CustomInput;
