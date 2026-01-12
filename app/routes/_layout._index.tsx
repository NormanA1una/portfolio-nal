import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import Contact from "~/layouts/contact";
import Hero from "~/layouts/hero";
import Projects from "~/layouts/projects";
import Skills from "~/layouts/skills";
import Experience from "~/layouts/experience";
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
      message: "All fields are required and must be text",
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
    return { success: false, message: "Error sending email" };
  }
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
