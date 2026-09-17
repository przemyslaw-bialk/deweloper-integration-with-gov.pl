import { GrHome } from "react-icons/gr";
import { LuTreeDeciduous } from "react-icons/lu";
import { IoSunnyOutline } from "react-icons/io5";

const ApartmentGroundFloorFeatures = () => {
  return (
    <div className="flex gap-6 md:gap-12 items-center mx-auto flex-col justify-center mt-12 md:mt-0 md:flex-row ">
      <div className="flex flex-col items-center gap-1 text-center">
        <GrHome className="text-accent text-xl md:text-4xl inline-block " />
        <p className="text-sm font-semibold">102m2</p>
        <p className="text-muted text-sm tracking-wide">
          Powierzchnia cakowita
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <IoSunnyOutline className="text-accent text-xl md:text-4xl inline-block " />
        <p className="text-sm font-semibold">Dobre nasłonecznienie</p>
        <p className="text-muted text-sm tracking-wide">Jasne wnętrza</p>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <LuTreeDeciduous className="text-accent text-xl md:text-4xl inline-block " />
        <p className="text-sm font-semibold">Ogród</p>
        <p className="text-muted text-sm tracking-wide">Dodatkowa przestrzeń</p>
      </div>
    </div>
  );
};

export default ApartmentGroundFloorFeatures;
