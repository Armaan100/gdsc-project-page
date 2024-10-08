import React from "react";
import Header from "./Header";
// import Card from "./Card";
// import DirectionIndicator from "./DirectionIndicator";
import Footer from "./Footer";

function MainContent() {
  return (
    <main className="flex overflow-hidden flex-col py-12 bg-red-500">
      <div className="flex flex-col px-16 pb-52 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <Header />
        {/* <Card
          title="Lorem Ipsum Dolor Sit Amet Myser"
          content={true}
          rotate="rotate-[0.2792526845577631rad]"
        /> */}
        {/* <Card
          imageUrl=""
          rotate="rotate-[0.13962633860264817rad]"
        /> */}
        {/* <Card title="Lorem Ipsum Dolor Sit Amet Myser" rotate="" />
        <DirectionIndicator
          text="Open Card!"
          className="mt-0 ml-36 w-[210px] max-md:mt-0 max-md:ml-2.5"
        /> */}
        {/* <DirectionIndicator
          text="Next Card!"
          className="self-end mt-0 mr-44 mb-0 w-[196px] max-md:mr-2.5 max-md:mb-2.5"
        /> */}
      </div>
      <Footer />
    </main>
  );
}

export default MainContent;
