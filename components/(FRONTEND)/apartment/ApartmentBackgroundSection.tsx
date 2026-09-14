import ButtonMain from "@/ui/ButtonMain";
import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import Image from "next/image";

const ApartmentBackgroundSection = () => {
  return (
    <div className="relative">
      <Image
        alt="photo of 2 houses"
        src="/photos/apartmentBackground.png"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/95 via-black/50 to-transparent" />

      <SectionWrapper className="relative max-w-7xl p-10">
        <MainTitle>Atrakcyjna cena</MainTitle>
        <SectionText classname="text-primary">
          789 000 zł - 7445,50 zł/m² <br />{" "}
        </SectionText>
        <ButtonMain href="/contact" className="mt-6">
          Umów się na spotkanie
        </ButtonMain>
      </SectionWrapper>
    </div>
  );
};
export default ApartmentBackgroundSection;
