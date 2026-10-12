"use client";

type Props = {
  area: number;
  priceOfApartment: number;
  pricePerMeterSquare: number;
  setPricePerMeterSquare: (value: number) => void;
};

const CountPricePerMeterSquare = ({
  area,
  priceOfApartment,
  pricePerMeterSquare,
  setPricePerMeterSquare,
}: Props) => {
  const handleCount = () => {
    console.log(area, pricePerMeterSquare);
    setPricePerMeterSquare(Math.round(priceOfApartment / area));
  };

  return (
    <div>
      <label
        htmlFor="pricePerMeterSquare"
        className="mb-2 block text-sm font-medium text-primary"
      >
        Cena za m² (zł)
      </label>

      <div className="flex gap-3">
        <input
          id="pricePerMeterSquare"
          name="pricePerMeterSquare"
          type="number"
          min="0"
          value={pricePerMeterSquare}
          onChange={(e) => setPricePerMeterSquare(Number(e.target.value))}
          className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-foreground outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
        />

        <button
          type="button"
          onClick={handleCount}
          className="shrink-0 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-background transition hover:bg-accent-light"
        >
          Przelicz
        </button>
      </div>
    </div>
  );
};

export default CountPricePerMeterSquare;
