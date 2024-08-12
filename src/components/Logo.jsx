import React from "react";

function Logo() {
  return (
    <div className="flex gap-2.5 justify-center items-center self-stretch my-auto text-xl font-bold">
      <img
        loading="lazy"
        src=""
        alt="GDSC Thapar Logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-[2.15] w-[43px]"
      />
      <div className="self-stretch my-auto">GDSC Thapar</div>
    </div>
  );
}

export default Logo;
