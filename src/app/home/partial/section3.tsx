export default function Section3() {
  return (
    <>
      <section className="min-h-screen h-[140vh] relative text-[#FDDAFF] p-[75px] overflow-hidden flex justify-center font-monumenExtended ">
        <div className="w-fit h-fit p-[3rem] text-center text-[40px] relative">
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
          HOW AINIMATE WORKS
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[50rem]">
          <div className="relative w-full">
            <img className=" w-full " src="/assets/home/section3.png" />

            <div className="absolute top-[27%] right-[-20%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap">
              <img src="/assets/home/bling_fill.png" alt="" />
              <div>Dynamic Captions & Bubbles</div>
            </div>
            <div className="absolute top-[57%] right-[-20%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap">
              <img src="/assets/home/bling_fill.png" alt="" />
              <div>Recreate with Redraw</div>
            </div>
            <div className="absolute bottom-[14%] right-[-17%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap">
              <img src="/assets/home/bling_fill.png" alt="" />
              <div>Fine-Tune Your Prompts</div>
            </div>

            <div className="absolute top-[30%] left-[-25%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap text-right">
              <div>Create Comics with Ease</div>
              <img src="/assets/home/bling_fill.png" alt="" />
            </div>
            <div className="absolute top-[60%] left-[-20%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap text-right">
              <div>Wide Range of Comic Styles</div>
              <img src="/assets/home/bling_fill.png" alt="" />
            </div>
            <div className="absolute bottom-[17%] left-[-14%] flex gap-2 text-[20px] text-[#FDDAFF] items-center w-[313px] text-wrap text-right">
              <div>Customizable Layouts</div>
              <img src="/assets/home/bling_fill.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
