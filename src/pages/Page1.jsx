import React from "react";
import style from "/src/css/main.module.css";
import gdsc from "/src/assets/gsdc.svg";
import { useState } from "react";
function Page1() {
  const [display, setdisplay] = useState(false);
  return (
    <div className={style.main}>
      <section id="card" className={style.card}>
        <button>Open Card!</button>
        <div className={style.element}>card</div>
        <button>Close Card!</button>
      </section>
    </div>
  );
}

export default Page1;
