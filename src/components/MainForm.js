import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function MainForm() {
  const formik = useFormik({
    //values, errors, handleSubmit, handleChange, isSubmitting
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordAgain: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {/* email */}
        <div className="inputDiv">
          <label>Email</label>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            placeholder="Email adresinizi giriniz"
            className={formik.errors.email ? "input-error" : ""}
          />
        </div>
        {formik.errors.email && <p className="error">{formik.errors.email}</p>}
        {/* eğer error varsa diye bir tane daha classname yapıyoruz */}

        {/* yaş */}
        <div className="inputDiv">
          <label>Yaş</label>
          <input
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
            id="age"
            placeholder="Yaşınızı giriniz"
            className={formik.errors.age ? "input-error" : ""}
          />
        </div>
        {formik.errors.age && <p className="error">{formik.errors.age}</p>}

        {/* şifre */}
        <div className="inputDiv">
          <label>Şifre</label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id="password"
            placeholder="Şifrenizi giriniz"
            className={formik.errors.password ? "input-error" : ""}
          />
        </div>
        {formik.errors.password && (
          <p className="error">{formik.errors.password}</p>
        )}

        {/* şifre tekrar */}
        <div className="inputDiv">
          <label>Şifre Tekrar</label>
          <input
            type="password"
            value={formik.values.passwordAgain}
            onChange={formik.handleChange}
            id="passwordAgain"
            placeholder="Şifrenizi tekrar giriniz"
            className={formik.errors.passwordAgain ? "input-error" : ""}
          />
        </div>
        {formik.errors.passwordAgain && (
          <p className="error">{formik.errors.passwordAgain}</p>
        )}

        {/* kaydet */}
        <button disabled={formik.isSubmitting} type="submit">
          Kaydet
        </button>
        <Link className="formLink" to="/portal">
          Portal Forma Git
        </Link>
      </form>
    </div>
  );
}

export default MainForm;
