import Image from "next/image";
export default function Section5() {
  return (
    <>
      <section className="min-h-screen text-[#FDDAFF] p-[75px] relative">
        <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2  bg-[#FE35FE] w-[77rem] h-[4rem] rotate-[156deg] rounded-full blur-[8rem]" />

        <div className="flex w-full h-full justify-center items-center flex-col gap-[5rem]">
          <div className="w-[726px] h-fit p-[3rem] text-center text-[40px] relative font-monumenExtended">
            <img
              className="absolute left-0 top-0"
              src="/assets/home/corner.svg"
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 rotate-180"
              src="/assets/home/corner.svg"
              alt=""
            />
            Discover the Magic of AINIMATE Creations
          </div>
          <div className="w-[697px] relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full p-[4rem]">
              <div className="flex flex-col gap-3">
                <div className="flex w-full gap-3 h-[17rem]">
                  <div className="w-[40%]">
                    <Image
                      className="size-full object-cover object-center brightness-50 hover:brightness-100 "
                      src={"/assets/home/section5/image.png"}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-[60%]">
                    <Image
                      className="size-full object-cover object-center brightness-50 hover:brightness-100 "
                      src={"/assets/home/section5/image-1.png"}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
                <div className="flex w-full gap-3 h-[17rem]">
                  <div className="w-[60%]">
                    <Image
                      className="size-full object-cover object-center brightness-50 hover:brightness-100 "
                      src={"/assets/home/section5/image-2.png"}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="w-[40%]">
                    <Image
                      className="size-full object-cover object-center brightness-50 hover:brightness-100 "
                      src={"/assets/home/section5/image-3.png"}
                      alt=""
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
            <img className="w-full" src="/assets/home/section5.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
