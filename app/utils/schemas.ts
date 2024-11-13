import { InferType, object, string } from "yup";

export const CONTACT_FORM_SCHEMA = object().shape({
  name: string().required("El nombre es requerido"),
  email: string()
    .email("El email es requerido")
    .required("El email es requerido"),
  message: string().required("El mensaje es requerido"),
  address: string(),
});

export type CONTACT_FORM_SCHEMA_TYPE = InferType<typeof CONTACT_FORM_SCHEMA>;
