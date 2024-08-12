import React from "react";
import styles from "/src/css/page.module.css";
import cross from "/src/assets/cross.svg";
import Footer from "../components/Footer";
import gdsc from "/src/assets/gsdc.svg";
import card from "/src/css/main.module.css";
function Project1() {
  return (
    <div className={styles.main}>
      {/* navbar */}
      <div className={card.main}>
        <section id="card" className={card.card}>
          <button>Open Card!</button>
          <div className={card.element}>card</div>
          <button>Close Card!</button>
        </section>
      </div>
      {/* containter 1  */}
      <div id="container1" className={styles.container1}>
        <div className={styles.crossf}>
          <img src={cross} alt="" className="p-3 bg-[#f5f5f5] rounded-full" />
          <div className={styles.full}>
            <div className="flex items-start bg-slate-700 w-fit">
              <img
                src="/src/assets/image.png"
                alt=""
                className={styles.photo}
              />
            </div>
            <p className={styles.tl}>Tl;DR</p>
            <Title content={"Project 1"} />
            <div className={styles.desc}>
              <p>
                Welcome to the Google Developer Student Club (GDSC) at Thapar
                University – a community where innovation meets opportunity. We
                are a student-led organization committed to fostering a vibrant
                tech ecosystem on campus. Our mission is to bridge the gap
                between theoretical knowledge and real-world application,
                empowering students to develop and refine their technical
                skills.
              </p>

              <p>
                As a part of a global network of GDSCs, we focus on practical
                learning and collaborative projects in cutting-edge technologies
                such as artificial intelligence, machine learning, cloud
                computing, and web development. Our events and initiatives are
                designed to help you grow as a technologist and leader in the
                ever-evolving tech landscape.
              </p>
            </div>

            {/* proejct stats */}
            <p className="mt-4 font-bold text-[20px]">Project Stats</p>
            <Stats />
          </div>
        </div>

        <div className="w-[90%]">
          <p className="bg-black text-white w-fit rounded-full px-7 py-3 text-[18px] font-semibold">
            More
          </p>

          <Title content={"More Projects"} />
          <p></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Project1;

function Stats({ member = 60, Projects = "8+", Departments = 12 }) {
  return (
    <div className="flex gap-x-[45px] mt-[28px]">
      <div>
        <h3 className="font-bold text-[50px]">{member}</h3>
        <p className="font-semibold text-[20px]">Members</p>
      </div>
      <div>
        <h3 className="font-bold text-[50px]">{Projects}</h3>
        <p className="font-semibold text-[20px]">Projects</p>
      </div>
      <div>
        <h3 className="font-bold text-[50px]">{Departments}</h3>
        <p className="font-semibold text-[20px]">Departments</p>
      </div>
    </div>
  );
}

function Title({ content }) {
  return <h2 className={styles.name}>{content}</h2>;
}
