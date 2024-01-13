import React from "react";
import HambugerIcon from "@public/icons/hamburgerMenu.svg?react";

export const HamburgerMenu = () => {
  return (
    <nav className="bg-[hsla(0,0%,100%,0.2)] grid place-items-center px-4 h-8 rounded">
      <HambugerIcon />
    </nav>
  );
};

export default HamburgerMenu;
