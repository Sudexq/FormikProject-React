import React from "react";
import { useField } from "formik";

function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  //   console.log(field);
  //   console.log(meta);
  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>Kullanım koşullarını kabul ediyorum</span>
      </div>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

export default CustomCheckBox;
