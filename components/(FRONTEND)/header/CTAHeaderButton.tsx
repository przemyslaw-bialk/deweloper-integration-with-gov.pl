import Link from "next/link";

const CTAHeaderButton = () => {
  return (
    <Link
      href="/contact"
      className="bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:bg-accent-light md:block hidden"
    >
      Zapytaj o ofertę
    </Link>
  );
};

export default CTAHeaderButton;
