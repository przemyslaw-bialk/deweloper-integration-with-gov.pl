"use client";

import { useInView } from "react-intersection-observer";
import ApartmentDescription from "@/components/(FRONTEND)/apartment/ApartmentDescription";
import ApartmentGroundFloorSketch from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorSketch";
import SectionWrapper from "@/ui/SectionWrapper";
import ApartmentGroundFloorTable from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorTable";
import ApartmentGroundFloorDescription from "@/components/(FRONTEND)/apartment/ground-floor/ApartmentGroundFloorDescription";
import ApartmentBackgroundSection from "@/components/(FRONTEND)/apartment/ApartmentBackgroundSection";
import ApartmentUpperFloorTable from "@/components/(FRONTEND)/apartment/upper-floor/ApartmentUpperFloorTable";
import ApartmentUpperFloorSketch from "@/components/(FRONTEND)/apartment/upper-floor/ApartmentUpperFloorSketch";

const ApartmentPage = () => {
  const { ref: firstRef, inView: firstInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: secondRef, inView: secondInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: thirdRef, inView: thirdInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <SectionWrapper className="pt-26">
        <div
          ref={firstRef}
          className={`flex flex-col items-start justify-between transition-all duration-1000 ease-out md:flex-row ${
            firstInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <ApartmentDescription />
          <ApartmentGroundFloorSketch />
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="py-12"
        backgroundColor="bg-background-secondary"
      >
        <div
          ref={secondRef}
          className={`flex flex-col gap-14 transition-all duration-1000 ease-out md:flex-row ${
            secondInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <ApartmentGroundFloorTable />
          <ApartmentGroundFloorDescription />
        </div>
      </SectionWrapper>

      <ApartmentBackgroundSection />

      <SectionWrapper>
        <div
          ref={thirdRef}
          className={`flex flex-col gap-14 pt-12 transition-all duration-1000 ease-out md:flex-row md:items-start ${
            thirdInView
              ? "translate-y-0 opacity-100"
              : "translate-y-12 opacity-0"
          }`}
        >
          <ApartmentUpperFloorTable />
          <ApartmentUpperFloorSketch />
        </div>
      </SectionWrapper>
    </>
  );
};

export default ApartmentPage;
