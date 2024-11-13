import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export const sendEmail = async (data: EmailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_PASS,
    },
  });

  const mailOptions: Mail.Options = {
    from: data.email,
    to: process.env.PERSONAL_EMAIL,
    subject: `Información sobre servicios requeridos`,
    html: `
    <div style="background-color: #150016; color: #FFE3D8; padding: 24px; border-radius: 16px; font-family: Arial, sans-serif;">
      <div style="background: linear-gradient(45deg, #522C5D, #29104A); padding: 32px; border-radius: 8px;">
        <h1 style="color: #FFE3D8; font-size: 36px; font-weight: 700; margin: 0 0 24px 0;">¡Hola!</h1>
        
        <p style="font-size: 24px; font-weight: 600; color: #E3B6B1; margin: 16px 0;">
          ¡Estoy interesado en tus servicios!
        </p>
        
        <p style="font-size: 24px; font-weight: 600; color: #E3B6B1; margin: 24px 0 16px 0;">
          Aquí están mis detalles de contacto:
        </p>
        
        <div style="background-color: #29104A; padding: 24px; border-radius: 8px; margin: 16px 0;">
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li style="color: #FFE3D8; font-size: 20px; margin: 12px 0;">
              <strong style="color: #E3B6B1;">Nombre:</strong> ${data.name}
            </li>
            <li style="color: #FFE3D8; font-size: 20px; margin: 12px 0;">
              <strong style="color: #E3B6B1;">Email:</strong> ${data.email}
            </li>
            <li style="color: #FFE3D8; font-size: 20px; margin: 12px 0;">
              <strong style="color: #E3B6B1;">Mensaje:</strong> ${data.message}
            </li>
          </ul>
        </div>

        <p style="font-size: 24px; color: #E3B6B1; font-weight: 600; margin: 24px 0 0 0; text-align: center;">
          ¡Muchas gracias! ¡Espero que hablemos pronto! 🧾
        </p>
      </div>
    </div>`,
  };

  const message = await transporter.sendMail(mailOptions);
  const confirmRes = message.response.match(/\bOK\b/);
  const messageOk = confirmRes ? confirmRes[0] : undefined;

  if (messageOk === "OK") {
    return new Response(
      JSON.stringify({
        message: "success",
      }),
      { status: 200 }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: "Failed to send email",
      }),
      { status: 500 }
    );
  }
};
