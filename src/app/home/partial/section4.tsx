import Image from "next/image";
import Link from "next/link";
export default function Section4() {
  return (
    <>
      <section className="min-h-screen text-[#FDDAFF] p-[75px] relative">
        <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FE35FE] w-[77rem] h-[4rem] rotate-[156deg] rounded-full blur-[8rem]" />

        <div className="flex w-full h-full justify-center">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="w-fit h-fit p-[2rem] text-center text-[40px] relative font-monumenExtended leading-10">
              <Image
                height={27}
                width={27}
                className="absolute left-0 top-0"
                src="/assets/home/corner.svg"
                alt=""
              />
              <Image
                height={27}
                width={27}
                className="absolute right-0 bottom-0 rotate-180"
                src="/assets/home/corner.svg"
                alt=""
              />
              <span className="text-[40px]">UPLOAD YOUR</span> <br />
              <span className="text-[25px]">CUSTOM CHARACTER</span>
            </div>
            <div className="text-[20px] my-[2rem]">
              Bring your imagination to life by uploading your custom characters
              and making them the stars of your AI-generated comic adventures.
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center">
            <Image
              height={300}
              width={300}
              className="w-[80%]"
              src="/assets/home/section4.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
