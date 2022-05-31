import yup from "yup";

const registerSchema = yup.object().shape({
  alpha_two_code: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/)
    .required(),

  web_pages: yup.array().of(yup.string()).required(),

  name: yup.string().required(),

  country: yup.string().required(),

  domains: yup.array().of(yup.string()).required(),

  stateProvince: yup
    .string()
    .min(2)
    .max(2)
    .matches(/^[A-Z]{2}$/),
});

export default registerSchema;
