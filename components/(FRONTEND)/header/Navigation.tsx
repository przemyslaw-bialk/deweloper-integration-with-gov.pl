import Link from "next/link";

type Props = {
  mobile?: boolean;
  closeMenu?: () => void;
};

const Navigation = ({ mobile = false, closeMenu }: Props) => {
  return (
    <nav
      className={
        mobile ? "fixed inset-0 z-30 h-screen w-screen bg-background" : ""
      }
    >
      <ul
        className={
          mobile ? "flex flex-col gap-6 p-6" : "flex items-center gap-8"
        }
      >
        <li>
          <Link
            href="/"
            onClick={closeMenu}
            className="text-sm text-white transition hover:text-accent-light"
          >
            Strona główna
          </Link>
        </li>

        <li>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-sm text-white transition hover:text-accent-light"
          >
            O nas
          </Link>
        </li>

        <li>
          <Link
            href="/offer"
            onClick={closeMenu}
            className="text-sm text-white transition hover:text-accent-light"
          >
            Oferta
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-sm text-white transition hover:text-accent-light"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
