type Props = {
  numberOfRooms: number;
  area: number;
};

const UneditableApartmentFields = ({ numberOfRooms, area }: Props) => {
  return (
    <>
      <input
        name="numberOfRooms"
        defaultValue={numberOfRooms}
        className="hidden"
      />
      <input name="area" defaultValue={area} className="hidden" />
    </>
  );
};

export default UneditableApartmentFields;
