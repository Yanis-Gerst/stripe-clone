import React from "react";

interface Props {
  children: React.ReactNode;
}

const ColorText: React.FC<Props> = ({ children }) => {
  return <span className="text-primary-color font-medium">{children}</span>;
};

export default ColorText;
