import { css } from "@emotion/css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "~/components/button";
import { ResponsiveContainer } from "~/components/container";
import { H2 } from "~/components/typography/h2";
import { COLORS } from "~/constants/colors";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";
import { CONTACT_FORM_SCHEMA, CONTACT_FORM_SCHEMA_TYPE } from "~/utils/schemas";

export default function Contact() {
  const style = {
    title: css({
      textAlign: "center",
      marginBottom: "72px",
    }),

    form: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      backgroundColor: COLORS.primary.darker,
      padding: "32px",
      borderRadius: "16px",
      maxWidth: "800px",
      margin: "0 auto",
      border: `1px solid ${COLORS.primary.dark}`,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }),

    inputContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }),

    label: css({
      fontSize: "16px",
      fontWeight: "600",
      color: COLORS.primary.light,
    }),

    input: css({
      backgroundColor: COLORS.primary.darkest,
      border: `1px solid ${COLORS.primary.dark}`,
      padding: "12px",
      borderRadius: "8px",
      outline: "none",
      color: COLORS.primary.lightest,

      "&:focus": {
        borderColor: COLORS.accent.purple,
        boxShadow: `0 0 0 2px ${COLORS.accent.purple}25`,
      },

      "&::placeholder": {
        color: COLORS.primary.dark,
        fontSize: "16px",
        fontWeight: "500",
      },
    }),

    textarea: css({
      backgroundColor: COLORS.primary.darkest,
      border: `1px solid ${COLORS.primary.dark}`,
      resize: "none",
      padding: "12px",
      borderRadius: "8px",
      outline: "none",
      color: COLORS.primary.lightest,
      height: "150px",

      "&:focus": {
        borderColor: COLORS.accent.purple,
        boxShadow: `0 0 0 2px ${COLORS.accent.purple}25`,
      },

      "&::placeholder": {
        color: COLORS.primary.dark,
        fontSize: "16px",
        fontWeight: "500",
      },
    }),

    error: css({
      color: "#dc2626",
      fontSize: "14px",
      fontWeight: "500",
    }),

    buttonContainer: css({
      display: "flex",
      justifyContent: "center",
    }),

    honeypot: css({
      display: "none",
      position: "absolute",
      left: "-9999px",
    }),
  };

  const fetcher = useRemixFetcher({
    onError: () => {
      console.error("Error al enviar el formulario");
    },
    onSuccess: () => {
      console.log("Formulario enviado correctamente");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CONTACT_FORM_SCHEMA),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      message: "",
      address: "",
    },
  });

  const onSubmit = (data: CONTACT_FORM_SCHEMA_TYPE) => {
    if (data.address) {
      console.log("Posible spam detectado");
      return;
    }

    fetcher.submit(data, {
      method: "post",
    });
    reset();
  };

  return (
    <ResponsiveContainer>
      <div id="contact" className={style.title}>
        <H2 weight="semi-bold" variant="5xl" classname={style.title}>
          Contact me
        </H2>
      </div>

      <fetcher.Form
        method="post"
        onSubmit={handleSubmit(onSubmit)}
        className={style.form}
      >
        <div className={style.inputContainer}>
          <label htmlFor="name" className={style.label}>
            Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={style.input}
            placeholder="Your name"
          />
          {errors.name && <p className={style.error}>{errors.name.message}</p>}
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="email" className={style.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={style.input}
            placeholder="Your email"
          />
          {errors.email && (
            <p className={style.error}>{errors.email.message}</p>
          )}
        </div>

        <div aria-hidden="true" className={style.honeypot}>
          <input
            tabIndex={-1}
            aria-hidden="true"
            id="address"
            {...register("address")}
            autoComplete="off"
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="message" className={style.label}>
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className={style.textarea}
            placeholder="Your message"
          />
          {errors.message && (
            <p className={style.error}>{errors.message.message}</p>
          )}
        </div>
        <div className={style.buttonContainer}>
          <Button type="submit" variant="primary">
            Contact me
          </Button>
        </div>
      </fetcher.Form>
    </ResponsiveContainer>
  );
}
