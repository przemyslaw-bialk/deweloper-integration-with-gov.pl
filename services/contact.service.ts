import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactEmailData = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
};

export const sendContactEmail = async (data: ContactEmailData) => {
  const { name, email, phoneNumber, subject, message } = data;

  const { data: result, error } = await resend.emails.send({
    from: "Biuro <biuro@mail.sdizpc.pl>",
    to: ["biuro@sdizpc.pl"],
    replyTo: email,
    subject,
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>

      <p><strong>Imię i nazwisko:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phoneNumber || "Nie podano"}</p>
      <p><strong>Temat:</strong> ${subject}</p>

      <h3>Wiadomość:</h3>
      <p>${message}</p>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  return result;
};
