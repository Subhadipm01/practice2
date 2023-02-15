import "./Header.css";
import React from "react";
const nav = [
  {
    Name: "Shop",
    href: "/Shop",
    Logo: null,
  },
  {
    Name: "About",
    href: "/About",
    Logo: null,
  },
  {
    Name: "Contct",
    href: "/Contact",
    Logo: null,
  },
  {
    Name: "Cart",
    href: "/Cart",
    Logo: null,
  },
];
function Header() {
  return (
    <div className="Header">
      <div className="logo">SUVO</div>
      <div className="nav">
        {nav.map((item) => (
          <div className="Menuitem" key={item.Name}>
            <a href={item.href}><span>{item.Name}</span></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
