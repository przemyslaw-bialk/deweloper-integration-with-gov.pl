"use client";

import ButtonSecondary from "@/ui/ButtonSecondary";
import MainTitle from "@/ui/MainTittle";
import SectionText from "@/ui/SectionText";
import SectionWrapper from "@/ui/SectionWrapper";
import SubtittleAccent from "@/ui/SubtittleAccent";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <SectionWrapper backgroundColor="bg-background" className="py-12">
      <div
        ref={ref}
        className={`flex flex-col items-center justify-between gap-6 py-6 transition-all duration-1000 ease-out md:flex-row ${
          inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <div>
          <SubtittleAccent>dlaczego my?</SubtittleAccent>

          <MainTitle>Zaufaj doświadczeniu</MainTitle>

          <SectionText>
            Od lat tworzymy miejsca, w których chce się żyć. Setki zadowolonych
            klientów i zrealizowane inwestycje to nasza najlepsza wizytówka.
          </SectionText>

          <ButtonSecondary href="/about" className="mt-10">
            O nas
          </ButtonSecondary>
        </div>

        <div className="flex items-center gap-2 md:gap-12">
          <Counter value={100} suffix="%">
            Gwarancji jakości
          </Counter>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUs;
