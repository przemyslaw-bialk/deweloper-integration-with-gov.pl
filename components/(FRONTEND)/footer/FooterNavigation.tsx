import Link from "next/link";
import FooterSectionTittle from "./FooterSectionTittle";

const FooterNavigation = () => {
  return (
    <div>
      <FooterSectionTittle>nawigacja</FooterSectionTittle>
      <div className="flex flex-col gap-4 mt-2">
        <Link
          href="/"
          className="text-muted text-sm tracking-wide hover:text-accent"
        >
          Strona główna
        </Link>
        <Link
          href="/about"
          className="text-muted text-sm tracking-wide hover:text-accent"
        >
          O nas
        </Link>
        <Link
          href="/offer"
          className="text-muted text-sm tracking-wide hover:text-accent"
        >
          Oferta
        </Link>
        <Link
          href="/contact"
          className="text-muted text-sm tracking-wide hover:text-accent"
        >
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default FooterNavigation;
