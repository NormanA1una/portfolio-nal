import { css } from "@emotion/css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "~/components/button";
import { H2 } from "~/components/typography/h2";
import { COLORS } from "~/constants/colors";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";
import { CONTACT_FORM_SCHEMA, CONTACT_FORM_SCHEMA_TYPE } from "~/utils/schemas";

export default function Contact() {
  const style = {
    container: css({
      margin: "0 auto 160px auto",
      width: "100%",
      "@media (min-width: 640px)": {
        maxWidth: "640px",
      },
      "@media (min-width: 768px)": {
        maxWidth: "768px",
      },
      "@media (min-width: 1024px)": {
        maxWidth: "1024px",
      },
      "@media (min-width: 1280px)": {
        maxWidth: "1280px",
      },
      "@media (min-width: 1536px)": {
        maxWidth: "1536px",
      },
    }),

    title: css({
      textAlign: "center",
      marginBottom: "72px",
    }),

    form: css({
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      backgroundColor: `${COLORS.primary.lightest}`,
      padding: "24px",
      borderRadius: "16px",
      maxWidth: "800px",
      margin: "0 auto",
    }),

    inputContainer: css({
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    }),

    label: css({
      fontSize: "16px",
      fontWeight: "600",
      color: "#111827",
    }),

    input: css({
      backgroundColor: `${COLORS.primary.light}`,
      border: "none",
      padding: "8px",
      borderRadius: "8px",
      outline: "none",
      color: "#111827",

      "&:focus": {
        boxShadow: `0px 0px 0px 4px ${COLORS.primary.light}50`,
      },

      "&::placeholder": {
        color: "#11182780",
        fontSize: "16px",
        fontWeight: "500",
      },
    }),

    textarea: css({
      backgroundColor: `${COLORS.primary.light}`,
      border: "none",
      resize: "none",
      padding: "8px",
      borderRadius: "8px",
      outline: "none",
      color: "#111827",
      height: "150px",

      "&:focus": {
        boxShadow: `0px 0px 0px 4px ${COLORS.primary.light}50`,
      },

      "&::placeholder": {
        color: "#11182780",
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

  console.log(errors);

  const onSubmit = (data: CONTACT_FORM_SCHEMA_TYPE) => {
    console.log("data", data);
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
    <div id="contact" className={style.container}>
      <div className={style.title}>
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
    </div>
  );
}
