import yup from "yup";

const updateSchema = yup.object().shape({
  alpha_two_code: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/),
  web_pages: yup.array().of(yup.string()),

  name: yup.string(),

  country: yup.string(),

  domains: yup.array().of(yup.string()),

  stateProvince: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/),
});

export default updateSchema;
