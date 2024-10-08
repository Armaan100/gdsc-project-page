import React from "react";
import Logo from "./Logo";
import NavItems from "./NavItems";
import FormLink from "./FormLink";

function Header() {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center px-8 py-5 w-full leading-none text-black bg-white border-black rounded-[100px] shadow-[0px_6px_8px_rgba(0,0,0,0.08)] max-md:px-5 max-md:max-w-full">
      <Logo />
      <NavItems />
      <FormLink />
    </header>
  );
}

export default Header;
