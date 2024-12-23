import Image from "next/image";
export default function Section2() {
  return (
    <>
      <section className="h-[22rem] text-white p-[75px]">
        <div className="w-full h-full relative">
          <img
            className="absolute w-full"
            src="/assets/home/subtract.svg"
            alt=""
          />
          <div className="absolute w-full h-full gap-[10rem] px-[5rem] flex justify-between items-center text-[#FDDAFF]">
            <div className="w-full font-monumenExtended  text-[32px]">
              Not an Artist? <br />
              Not a Problem
            </div>
            <img src="/assets/home/arrow.svg" alt="" />
            <div className="w-full text-justify">
              Ignite your imagination with AInimate! Turn your ideas into
              breathtaking comics with ease. Dive into the art of storytelling
              now!{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
