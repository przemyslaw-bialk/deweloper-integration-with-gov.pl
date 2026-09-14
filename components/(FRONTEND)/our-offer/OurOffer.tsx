"use client";

import ButtonMain from "@/ui/ButtonMain";
import MainTittle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SubtittleAccent from "@/ui/SubtittleAccent";
import PhotoGrid from "../photo-grid/PhotoGrid";
import { useInView } from "react-intersection-observer";

const OurOffer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-background-secondary py-12">
      <div
        ref={ref}
        className={`mx-auto flex max-w-7xl flex-col items-start gap-12 px-6 transition-all duration-1000 ease-out md:flex-row md:items-center ${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div className="flex-1/2">
          <SubtittleAccent>mieszkania</SubtittleAccent>
          <MainTittle className="mt-2">
            Znajdź mieszkanie <br />
            dopasowane do Ciebie
          </MainTittle>
          <SectionText classname="mt-2">
            Sprawdź dostępne mieszkania w naszych inwestycjach.
          </SectionText>
          <ButtonMain href="/offer" className="mt-10">
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
