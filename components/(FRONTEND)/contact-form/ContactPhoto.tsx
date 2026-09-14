import Image from "next/image";

const ContactPhoto = () => {
  return (
    <div className="relative flex-1 min-h-[320px] mt-2 md:block hidden">
      <div className="absolute inset-0 z-10 bg-linear-to-br from-black/95 via-black/30 to-transparent  overflow-hidden" />
      <Image
        src="/contact.png"
        alt="Image of elegant house"
        fill
        objectFit="cover"
      />
    </div>
  );
};

export default ContactPhoto;
