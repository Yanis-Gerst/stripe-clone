import React from "react";

const navsList = [
  "Products",
  "Solutions",
  "Developers",
  "Resources",
  "Pricing",
];

const DropdownMenu = () => {
  return (
    <ul>
      {navsList.map((navLabel) => (
        <li>
          <nav>{navLabel}</nav>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
