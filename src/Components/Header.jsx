import React from "react";
import menu from "../assets/icons/menu.svg";

function Header() {
  return (
    <header className="py-4 w-full absolute top-0">
      <div className="container flex justify-between items-center">
        <a href="" className="font-futuraXBlkBT text-3xl font-bold">
          DieBiden
        </a>
        <button className="transition hover:scale-90 cursor-pointer">
          <img src={menu} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
