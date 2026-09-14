"use client";

import { sendContactEmailAction } from "@/actions/contact";
import { useForm } from "react-hook-form";
import ContactFormTittle from "./ContactFormTittle";

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber?: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    await sendContactEmailAction(data);

    console.log(data);
    reset();
  };

  return (
    <div className="bg-background-secondary w-full md:p-10 pb-6 md:pb-0  ">
      <ContactFormTittle />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
          <div className="flex gap-6 md:col-span-2 col-span-1">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Imię i nazwisko
              </label>

              <input
                {...register("name", {
                  required: "Podaj imię i nazwisko",
                })}
                id="name"
                type="text"
                placeholder="Jan Kowalski"
                className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                E-mail
              </label>

              <input
                {...register("email", {
                  required: "Podaj adres e-mail",
                })}
                id="email"
                type="email"
                placeholder="jan.kowalski@gmail.com"
                className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
              />

              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-foreground"
            >
              Telefon
            </label>

            <input
              {...register("phoneNumber")}
              id="phoneNumber"
              type="tel"
              placeholder="660 550 440"
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            {errors.phoneNumber && (
              <p className="text-sm text-red-500">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              htmlFor="subject"
              className="text-sm font-medium text-foreground"
            >
              Temat
            </label>

            <input
              {...register("subject", {
                required: "Podaj temat wiadomości",
              })}
              id="subject"
              type="text"
              placeholder="Temat wiadomości"
              className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            {errors.subject && (
              <p className="text-sm text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 md:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Wiadomość
            </label>

            <textarea
              {...register("message", {
                required: "Wiadomość jest pusta",
                minLength: {
                  value: 20,
                  message: "Wiadomość powinna zawierać co najmniej 20 znaków!",
                },
              })}
              id="message"
              placeholder="Jestem zainteresowany/a kupnem mieszkania..."
              className="min-h-32 w-full resize-none rounded-lg border border-border bg-background px-3 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-accent px-6 py-3 text-black transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Wysyłanie..." : "Wyślij"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
