type Props = {
  value: "available" | "reserved" | "sold";
};

const ApartmentStatus = ({ value }: Props) => {
  return (
    <select
      id="status"
      name="status"
      defaultValue={value}
      className="w-full rounded-lg border border-border bg-card px-2 py-2.5 text-foreground outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
    >
      <option value="available">Dostępne</option>
      <option value="reserved">Zarezerwowane</option>
      <option value="sold">Sprzedane</option>
    </select>
  );
};

export default ApartmentStatus;
