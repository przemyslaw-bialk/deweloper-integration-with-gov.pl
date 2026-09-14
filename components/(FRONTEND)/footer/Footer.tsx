import SectionWrapper from "@/ui/SectionWrapper";
import FooterLogo from "./FooterLogo";
import FooterContactInfo from "./FooterContactInfo";
import FooterNavigation from "./FooterNavigation";

const Footer = () => {
  return (
    <SectionWrapper className="py-6">
      <div className="flex md:flex-row flex-col items-start justify-between gap-12 ">
        <FooterLogo />
        <FooterNavigation />
        <FooterContactInfo />
      </div>
    </SectionWrapper>
  );
};

export default Footer;
