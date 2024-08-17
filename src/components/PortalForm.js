import React from "react";
import { Form, Formik} from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { Link } from "react-router-dom";

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
        {({isSubmitting}) => (
          <Form>
            <CustomInput
              label="Kullanıcı Adı"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
              name="userName"
            />
            <CustomSelect
              label="Üniversiteniz"
              name="university"
              placeholder="Üniversitenizi seçiniz"
            >
              <option value="">Lütfen Üniversitenizi Seçiniz</option>
              <option value="itu">İTÜ</option>
              <option value="odtu">ODTÜ</option>
              <option value="bogazici">Boğaziçi Üniversitesi</option>
              <option value="kultur">Kültür Üniversitesi</option>
            </CustomSelect>

            <CustomCheckBox type="checkbox" name="isActepted" />

            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">Ana Forma Git</Link>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default PortalForm;
