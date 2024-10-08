import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; //şifre kurralları için özel karakter girilmesin diye uyarı verecek

//ana sayfa

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lütfen pozitif bir değer giriniz")
    .integer("Lütfen tam sayı bir değer giriniz")
    .required("Yaş girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Minumum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "En az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Şifre girilmesi zorunludur"),
  passwordAgain: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler aynı değil")
    .required("Tekrar şifre girilmesi zorunludur"),
});

//portal sayfası

export const advancedSchema = yup.object().shape({
  userName: yup
    .string()
    .min(3, "Minumum 3 karakter giriniz")
    .required("Kullanıcı Adı girmek zorunludur"),
  university: yup
    .string()
    .oneOf(
      ["itu", "odtu", "bogazici", "kultur"],
      "lütfen üniversitenizi seçiniz"
    )
    .required("Üniversite girmek zorunludur"),
  isAcepted: yup
    .boolean().oneOf([true],"kullanım koşullarını kabul ediniz")
});
