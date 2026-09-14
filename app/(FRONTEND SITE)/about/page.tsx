"use client";

import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";
import PhotoGrid from "@/components/(FRONTEND)/photo-grid/PhotoGrid";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const { ref, inView } = useInView();
  return (
    <SectionWrapper className="pt-30">
      <div
        ref={ref}
        className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20
    transition-all duration-1000 ease-out
    ${inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
      >
        <div>
          <SubtittleAccent>o nas</SubtittleAccent>
          <MainTitle>
            Tworzymy miejsca,
            <br />w których chce się żyć.
          </MainTitle>
          <div className="mt-6">
            <SectionText>
              Wierzymy, że dobrze zaprojektowana przestrzeń to coś więcej niż
              tylko cztery ściany. To miejsce, które daje poczucie komfortu,
              spokoju i bezpieczeństwa.
            </SectionText>

            <SectionText>
              Łączymy nowoczesną architekturę, funkcjonalność i dbałość o każdy
              szczegół, tworząc przestrzenie dopasowane do codziennego życia.
            </SectionText>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <PhotoGrid />
      </div>
    </SectionWrapper>
  );
};

export default AboutPage;
