import { InferType, object, string } from "yup";

export const CONTACT_FORM_SCHEMA = object().shape({
  name: string().required("Name is required"),
  email: string()
    .email("Email is required")
    .required("Email is required"),
  message: string().required("Message is required"),
  address: string(),
});

export type CONTACT_FORM_SCHEMA_TYPE = InferType<typeof CONTACT_FORM_SCHEMA>;
