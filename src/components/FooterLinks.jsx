import React from "react";

function FooterLinks() {
  const links = [
    {
      title: "PROJECTS",
      items: ["Project 1", "Project 2", "Project 3"],
    },
    { title: "DEPARTMENTS" },
    { title: "EVENTS" },
    { title: "ALUMNI" },
    { title: "TEAMS" },
  ];

  return (
    <nav className="flex flex-wrap gap-10 items-start mt-20 text-sm font-bold text-black max-md:mt-10 max-md:max-w-full">
      {links.map((link, index) => (
        <div
          key={index}
          className={
            link.items ? "flex flex-col text-black text-opacity-50" : ""
          }
        >
          <div className="font-bold text-black">{link.title}</div>
          {link.items &&
            link.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mt-5">
                {item}
              </div>
            ))}
        </div>
      ))}
    </nav>
  );
}

export default FooterLinks;
