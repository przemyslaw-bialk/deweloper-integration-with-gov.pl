"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Logo from "@/ui/Logo";
import CTAHeaderButton from "./CTAHeaderButton";
import MenuButton from "./MenuButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-24">
          <Navigation />
          <CTAHeaderButton />
        </div>

        {/* Mobile */}
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full md:hidden">
          <Navigation mobile closeMenu={() => setShowMenu(false)} />
          <div className="p-4">
            <CTAHeaderButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
