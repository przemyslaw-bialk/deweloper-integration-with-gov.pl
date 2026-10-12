import { Dispatch, SetStateAction } from "react";

type Props = {
  priceOfApartment: number;
  setPriceOfApartment: Dispatch<SetStateAction<number>>;
};

const PriceOfApartment = ({ priceOfApartment, setPriceOfApartment }: Props) => {
  return (
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
  );
};

export default PriceOfApartment;
