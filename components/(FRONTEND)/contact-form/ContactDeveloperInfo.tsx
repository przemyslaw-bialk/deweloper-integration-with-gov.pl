import SubtittleAccent from "@/ui/SubtittleAccent";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const ContactDeveloperInfo = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      <div className="flex gap-3">
        <div className="w-fit p-3 border border-accent rounded-sm">
          <BsTelephone className="text-accent" />
        </div>
        <div>
          <SubtittleAccent>Zadzwoń do nas</SubtittleAccent>
          <p className="text-muted text-sm tracking-wide">
            <a href="tel:+48515433176">+48 515 433 176</a>
          </p>
        </div>
      </div>
      <div className="flex gap-3 pb-6 md:pb-0">
        <div className="w-fit p-3 border border-accent rounded-sm">
          <MdOutlineMail className="text-accent" />
        </div>
        <div>
          <SubtittleAccent>Napisz do nas</SubtittleAccent>
          <p className="text-muted text-sm tracking-wide">
            <a href="mailto:biuro@sdizpc.pl">biuro@sdizpc.pl</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactDeveloperInfo;
