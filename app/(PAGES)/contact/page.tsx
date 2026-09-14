import ContactForm from "@/components/(FRONTEND)/contact-form/ContactForm";
import ContactFormInfo from "@/components/(FRONTEND)/contact-form/ContactFormInfo";
import SectionWrapper from "@/ui/SectionWrapper";

const ContactPage = () => {
  return (
    <SectionWrapper className="flex items-start flex-col md:flex-row pt-30">
      <ContactFormInfo />
      <ContactForm />
    </SectionWrapper>
  );
};

export default ContactPage;
