"use client";
import { BsPinMap } from "react-icons/bs";
import { BiCheckShield } from "react-icons/bi";
import { CgIfDesign } from "react-icons/cg";
import { IoKeyOutline } from "react-icons/io5";
import type { IconType } from "react-icons";
import SubtittleAccent from "@/ui/SubtittleAccent";
import SectionWrapper from "@/ui/SectionWrapper";
import { useInView } from "react-intersection-observer";

type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

const FeaturesArray: Feature[] = [
  {
    icon: BsPinMap,
    title: "atrakcyjne lokalizacje",
    description: "Inwestujemy w miejsca, które mają znaczenie.",
  },
  {
    icon: BiCheckShield,
    title: "wysoka jakość",
    description: "Solidne materiały i sprawdzone technologie.",
  },
  {
    icon: CgIfDesign,
    title: "nowoczesny design",
    description: "Przemyślane układy mieszkań i elegancka architektura.",
  },
  {
    icon: IoKeyOutline,
    title: "kompleksowa obsługa",
    description: "Pomagamy na każdym etapie zakupu mieszkań.",
  },
];

const Features = () => {
  const { ref, inView } = useInView();

  return (
    <div className="bg-background py-12">
      <SectionWrapper className="mx-auto grid max-w-7xl grid-cols-2 gap-12 py-6 md:grid-cols-4">
        {FeaturesArray.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              style={{ transitionDelay: `${index * 150}ms` }}
              ref={ref}
              key={feature.title}
              className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                inView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <Icon className="text-3xl text-accent" />
              <div>
                <SubtittleAccent>{feature.title}</SubtittleAccent>
                <p className="mt-1 text-sm tracking-wider text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </SectionWrapper>
    </div>
  );
};

export default Features;
