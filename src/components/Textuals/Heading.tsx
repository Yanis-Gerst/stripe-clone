import React from "react";

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-[34px] text-header-color font-bold">{children}</h1>
  );
};

export default Heading;
