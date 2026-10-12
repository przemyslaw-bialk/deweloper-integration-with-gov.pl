type Field = {
  name: string;
  label: string;
  value: string | number;
};

type Props = {
  field: Field;
};

const EditableApartmentFields = ({ field }: Props) => {
  return (
    <div>
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
  );
};

export default EditableApartmentFields;
