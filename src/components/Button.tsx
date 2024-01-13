import React, { type ReactNode } from "react";
import RightArrow from "@public/icons/rightArrow.svg?react";

type IButtonType = "primary" | "secondary";

interface Props {
  type: IButtonType;
  children: ReactNode;
}

const Button: React.FC<Props> = ({ type, children }) => {
  return (
    <button
      className={`w-fit flex items-center gap-2 pt-[3px] pr-3 pb-[6px] pl-4 rounded font-medium text-[15px]
       ${
         type === "primary"
           ? "bg-primary-color text-[#fff]"
           : "text-primary-color"
       }`}
    >
      {children}{" "}
      <RightArrow
        className={`w-[10px] h-[10px] stroke-2 fill-none relative top-[1px] ${
          type === "primary" ? "stroke-[#fff]" : "stroke-primary-color"
        }`}
      />
    </button>
  );
};

export default Button;
