"use client";

import { updateApartmentAction } from "@/actions/apartment";
import { useState } from "react";
import EditApartmentButton from "./EditApartmentButton";
import ApartmentStatus from "./ApartmentStatus";
import CountPricePerMeterSquare from "./CountPricePerMeterSquare";

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
        <h2 className="mb-2 font-heading text-3xl">Edytuj mieszkanie</h2>

        <p className="mb-8 text-sm text-muted">
          Zaktualizuj dane nieruchomości
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {apartmentFields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-2 block text-sm font-medium text-primary"
              >
                {field.label}
              </label>

              <input
                id={field.name}
                name={field.name}
                defaultValue={field.value}
                className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="priceOfApartment"
              className="mb-2 block text-sm font-medium text-primary"
            >
              Cena mieszkania (zł)
            </label>

            <input
              id="priceOfApartment"
              name="priceOfApartment"
              type="number"
              min="1"
              value={priceOfApartment}
              onChange={(e) => setPriceOfApartment(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </div>

        <CountPricePerMeterSquare
          area={apartment.area}
          priceOfApartment={priceOfApartment}
          pricePerMeterSquare={pricePerMeterSquare}
          setPricePerMeterSquare={setPricePerMeterSquare}
        />

        <div className="mt-5">
          <label
            htmlFor="status"
            className="my-2 block text-sm font-medium text-primary"
          >
            Dostępność
          </label>

          <ApartmentStatus value={apartment.status} />
        </div>

        <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition hover:border-primary hover:text-foreground"
          >
            Anuluj
          </button>

          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-light active:bg-accent-dark"
          >
            Zapisz zmiany
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditApartmentForm;
