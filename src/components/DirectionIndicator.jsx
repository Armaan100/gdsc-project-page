import React from "react";

function DirectionIndicator({ text, className }) {
  return (
    <div
      className={`flex flex-col justify-center ${className} max-w-full text-4xl font-bold leading-none text-black text-opacity-70`}
    >
      <div className="rotate-[-6.938893903907228e-18rad]">{text}</div>
      <div className="mt-2.5 w-full border-solid border-[6px] border-black border-opacity-70 min-h-[6px]" />
    </div>
  );
}

export default DirectionIndicator;
