import { LiaCouchSolid } from "react-icons/lia";
import { LuTreeDeciduous, LuWaves } from "react-icons/lu";
import { SlSettings } from "react-icons/sl";

const ApartmentFeatures = () => {
  return (
    <div className="mt-10 grid grid-cols-2 bg-background-secondary p-4 md:bg-background md:p-0 md:flex md:gap-12 gap-6">
      <div className="flex flex-col items-center">
        <LiaCouchSolid className="text-accent text-xl md:text-4xl " />
        <p className="text-muted mt-2 tracking-wider text-sm text-center">
          Przestronny <br />
          salon
        </p>
      </div>
      <div className="flex flex-col items-center">
        <LuTreeDeciduous className="text-accent text-xl md:text-4xl " />
        <p className="text-muted mt-2 tracking-wider text-sm text-center">
          Własny <br />
          ogród
        </p>
      </div>
      <div className="flex flex-col items-center">
        <LuWaves className="text-accent text-xl md:text-4xl " />
        <p className="text-muted mt-2 tracking-wider text-sm text-center">
          Spokojna <br />
          okolica
        </p>
      </div>
      <div className="flex flex-col items-center">
        <SlSettings className="text-accent text-xl md:text-4xl " />
        <p className="text-muted mt-2 tracking-wider text-sm text-center">
          Nowoczesne <br />
          rozwiązania
        </p>
      </div>
    </div>
  );
};

export default ApartmentFeatures;
