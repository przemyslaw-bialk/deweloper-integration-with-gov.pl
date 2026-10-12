type Props = {
  onCancel: () => void;
};

const EditApartmentButtons = ({ onCancel }: Props) => {
  return (
    <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:justify-end">
      <button
        type="button"
        onClick={onCancel}
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
  );
};

export default EditApartmentButtons;
