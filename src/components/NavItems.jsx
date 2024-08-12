import React from "react";

function NavItems() {
  const items = ["PROJECTS", "DEPARTMENTS", "EVENTS", "ALUMNI", "TEAM"];

  return (
    <nav className="flex flex-wrap gap-10 justify-center items-center self-stretch my-auto text-sm font-semibold min-w-[240px] max-md:max-w-full">
      <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap">
        <div className="self-stretch my-auto">PROJECTS</div>
        <div className="self-stretch my-auto">NEW!</div>
      </div>
      {items.slice(1).map((item, index) => (
        <div key={index} className="self-stretch my-auto">
          {item}
        </div>
      ))}
    </nav>
  );
}

export default NavItems;
