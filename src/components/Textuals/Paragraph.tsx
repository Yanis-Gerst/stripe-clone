import React from "react";

interface Props {
  children: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <p className="text-[18px] leading[1.5] text-main-content">{children}</p>
  );
};

export default Paragraph;
