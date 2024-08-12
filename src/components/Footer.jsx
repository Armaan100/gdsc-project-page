import React from "react";
import Logo from "/src/assets/gsdc.svg";
import FormLink from "./FormLink";
import FooterLinks from "./FooterLinks";

function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start self-center p-10 mt-20 w-[90%] m-auto leading-none bg-white border-black  rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center self-stretch w-full max-md:max-w-full">
        <img src={Logo} alt="" />
        <FormLink />
      </div>
      <FooterLinks />
      <div className="gap-10 mt-20 text-sm text-neutral-600 max-md:mt-10">
        Developed by GDSC Thapar. Copyright GDSC Thapar
      </div>
    </footer>
  );
}

export default Footer;
