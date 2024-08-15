import React from "react";
import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", university: "", isAcepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {() => (
          <Form>
            <div className="inputDiv">
              <CustomInput
                label="Kullanıcı Adı"
                type="text"
                placeholder="Kullanıcı Adınızı Giriniz"
                name="userName"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
