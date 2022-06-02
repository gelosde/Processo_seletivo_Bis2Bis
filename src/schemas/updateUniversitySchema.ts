import yup from "yup";

const updateSchema = yup.object().shape({
  name: yup.string(),
  web_pages: yup.array().of(yup.string()),
  domains: yup.array().of(yup.string()),
});

export default updateSchema;
