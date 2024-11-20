import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import Contact from "~/layouts/contact";
import Hero from "~/layouts/hero";
import Projects from "~/layouts/projects";
import Skills from "~/layouts/skills";
import { sendEmail } from "~/utils/mailer.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (
    !name ||
    !email ||
    !message ||
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    return {
      success: false,
      message: "Todos los campos son requeridos y deben ser texto",
    };
  }

  const data = {
    name,
    email,
    message,
  };

  try {
    const message = await sendEmail(data).then((res) => res.json());
    return { success: true, message };
  } catch (error) {
    return { success: false, message: "Error al enviar el email" };
  }
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
