import Image from "next/image";
import Link from "next/link";
import Header from "./header";
export default function Section1() {
  return (
    <>
      <section className="h-screen text-white font-encodeSans overflow-hidden">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[1470px] h-[720px] ">
          <div className="relative w-full h-full">
            <Header/>
            <div className="absolute top-1/2 w-[79%] left-1/2 scale-125 -translate-y-1/2 -translate-x-1/2">
              <video
                className="w-full object-cover"
                src="/assets/home/bg.mp4"
                autoPlay
                loop
                muted
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full">
              <Image
                height={300}
                width={300}
                className="w-full"
                src="/assets/home/bghome.svg"
                alt=""
              />
            </div>
            <div className="absolute bottom-[20%] left-[10%] flex flex-col">
          <div className="text-[16.26px] mb-2">Precision and Creativity</div>
          <div className="text-[50px] mb-8 leading-[50px] font-monumenExtended uppercase">
            Create Your Own Comic <br /> with AINIMATE
          </div>
          <Link href={"/generate"} className="w-[264px]">
            <Image
              height={300}
              width={300}
              className="w-full hover:animate-shake"
              src="/assets/home/getstarted.svg"
              alt=""
            />
          </Link>
        </div>
          </div>
        </div>


      </section>
    </>
  );
}
