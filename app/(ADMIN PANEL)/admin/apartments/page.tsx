import DeleteApartment from "@/components/(ADMIN)/apartment-form/DeleteApartment";
import EditApartmentForm from "@/components/(ADMIN)/apartment-form/EditApartmentForm";
import { getAllApartments } from "@/services/apartment.service";

const ApartmentsPage = async () => {
  const apartments = await getAllApartments();

  return (
    <div>
      {apartments.map((apartment) => (
        <div key={apartment._id} className="flex items-center gap-2">
          <p>{apartment.investment},</p>

          <div className="flex items-center gap-0.5">
            <p>{apartment.streetName}</p>
            <p>{apartment.apartmentNumber}</p>
          </div>
          <EditApartmentForm apartment={apartment} />
          <DeleteApartment id={apartment._id} />
        </div>
      ))}
    </div>
  );
};

export default ApartmentsPage;
