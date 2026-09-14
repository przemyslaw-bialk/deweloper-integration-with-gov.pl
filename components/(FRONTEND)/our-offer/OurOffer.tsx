import ButtonMain from "@/ui/ButtonMain";
import MainTittle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SubtittleAccent from "@/ui/SubtittleAccent";
import PhotoGrid from "../photo-grid/PhotoGrid";

const OurOffer = () => {
  return (
    <div className="bg-background-secondary py-12">
      <div className="mx-auto flex max-w-7xl items-start md:items-center gap-12 px-6 flex-col md:flex-row">
        <div className="flex-1/2 ">
          <SubtittleAccent>mieszkania</SubtittleAccent>

          <MainTittle className="mt-2">
            Znajdź mieszkanie <br />
            dopasowane do Ciebie
          </MainTittle>

          <SectionText classname="mt-2">
            Sprawdź dostępne mieszkania w naszych inwestycjach.
          </SectionText>

          <ButtonMain href="/offer" className="mt-10 ">
            Przejdź do oferty
          </ButtonMain>
        </div>

        <div className="w-full">
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default OurOffer;
