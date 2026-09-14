import { IoIosMenu } from "react-icons/io";

type Props = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuButton = ({ showMenu, setShowMenu }: Props) => {
  return (
    <button
      type="button"
      onClick={() => setShowMenu((prev) => !prev)}
      className="fixed top-4 right-4 z-50 text-3xl text-white md:hidden"
      aria-label={showMenu ? "Zamknij menu" : "Otwórz menu"}
    >
      <IoIosMenu />
    </button>
  );
};

export default MenuButton;
