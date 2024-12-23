"use client"
import { useState, useEffect } from "react";
import NowLoading from "@/components/loading/nowloading";
import Footer from "./partial/footer";
import Header from "./partial/header";
import Section1 from "./partial/section1";
import Section2 from "./partial/section2";
import Section3 from "./partial/section3";
import Section4 from "./partial/section4";
import Section5 from "./partial/section5";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoading && <NowLoading />}

        <>
          {/* <Header /> */}
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Footer />
        </>

    </>
  );
}
