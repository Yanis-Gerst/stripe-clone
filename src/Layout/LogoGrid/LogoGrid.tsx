import React from "react";
import * as logo from "./logo";

const LogoGrid = () => {
  return (
    <div className="grid grid-rows-4 grid-cols-2 w-full gap-y-[60px] [&>svg]:max-w-[160px]">
      <logo.Amazon />
      <logo.Saleforce />
      <logo.Google />
      <logo.Zara />
      <logo.Shopify />
      <logo.WhatsApp />
      <logo.Bmw />
      <logo.Marriott />
    </div>
  );
};

export default LogoGrid;
