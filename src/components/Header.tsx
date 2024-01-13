import React from "react";
import StripeIcon from "@public/logo/stripeLogo.svg?react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <div className="flex justify-between py-2 pt-8 items-center w-full relative z-10">
      <StripeIcon />
      <HamburgerMenu />
    </div>
  );
};

export default Header;
