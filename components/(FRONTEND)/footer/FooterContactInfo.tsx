import FooterSectionTittle from "./FooterSectionTittle";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { MdSchedule } from "react-icons/md";

const FooterContactInfo = () => {
  return (
    <div>
      <FooterSectionTittle>kontakt</FooterSectionTittle>
      <div className="flex gap-6">
        <div>
          {" "}
          <div className="mt-2 flex items-center gap-2">
            <BsTelephone className="text-accent" />
            <p className="text-muted text-sm tracking-wide">
              <a href="tel:+48515433176">+48 515 433 176</a>
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <VscLocation className="text-accent" />
            <p className="text-muted text-sm tracking-wide">
              ul. Solna 12, 62-069 Dąbrowa
            </p>
          </div>
        </div>
        <div>
          <div className="mt-2 flex items-center gap-2">
            <MdOutlineMail className="text-accent" />
            <p className="text-muted text-sm tracking-wide hover:underline">
              <a href="mailto:biuro@sdizpc.pl">napisz do nas</a>
            </p>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <MdSchedule className="text-accent" />
            <p className="text-muted text-sm tracking-wide">
              Pon - Pt: 9:00 - 17:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContactInfo;
