"use client";

import { updateApartmentAction } from "@/actions/apartment";
import { useState } from "react";
import EditApartmentButton from "./EditApartmentButton";
import ApartmentStatus from "./ApartmentStatus";
import CountPricePerMeterSquare from "./CountPricePerMeterSquare";
import UneditableApartmentFields from "./UneditableApartmentFields";
import EditApartmentButtons from "./EditApartmentButtons";
import EditApartmentHeading from "./EditApartmentHeading";
import EditableApartmentFields from "./EditableApartmentFields";
import PriceOfApartment from "./PriceOfApartment";

type Apartment = {
  _id: string;
  investment: string;
  streetName: string;
  apartmentNumber: string;
  area: number;
  numberOfRooms: number;
  priceOfApartment: number;
  pricePerMeterSquare: number;
  status: "available" | "reserved" | "sold";
};

type Props = {
  apartment: Apartment;
};

const EditApartmentForm = ({ apartment }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [priceOfApartment, setPriceOfApartment] = useState(
    apartment.priceOfApartment,
  );

  const [pricePerMeterSquare, setPricePerMeterSquare] = useState(
    apartment.pricePerMeterSquare,
  );

  const apartmentFields = [
    {
      name: "investment",
      label: "Inwestycja",
      value: apartment.investment,
    },
    {
      name: "streetName",
      label: "Ulica",
      value: apartment.streetName,
    },
    {
      name: "apartmentNumber",
      label: "Numer mieszkania",
      value: apartment.apartmentNumber,
    },
  ];

  if (!isEditing) {
    return <EditApartmentButton setIsEditing={setIsEditing} />;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <form
        action={async (formData) => {
          await updateApartmentAction(apartment._id, formData);
          setIsEditing(false);
        }}
        className="w-full max-w-2xl rounded-2xl border border-border bg-background-secondary p-6 shadow-2xl sm:p-8"
      >
        <EditApartmentHeading />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {apartmentFields.map((field) => (
            <EditableApartmentFields field={field} key={field.name} />
          ))}
          <PriceOfApartment
            priceOfApartment={priceOfApartment}
            setPriceOfApartment={setPriceOfApartment}
          />
          <UneditableApartmentFields
            numberOfRooms={apartment.numberOfRooms}
            area={apartment.area}
          />
        </div>
        <CountPricePerMeterSquare
          area={apartment.area}
          priceOfApartment={priceOfApartment}
          pricePerMeterSquare={pricePerMeterSquare}
          setPricePerMeterSquare={setPricePerMeterSquare}
        />
        <ApartmentStatus value={apartment.status} />
        <EditApartmentButtons onCancel={() => setIsEditing(false)} />
      </form>
    </div>
  );
};

export default EditApartmentForm;
