"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ComicPanel from "./component/ComicPanel";
import SummaryText from "./component/SummaryText";
import { ResultProps } from "./page";

export default function ResultUIComponent(props: ResultProps) {
  const router = useRouter();

  return (
    <div className="w-screen max-w-screen h-screen bg-[#141414] p-[5rem] pr-[6rem] overflow-x-hidden">
      {/* Result Title */}
      <div
        className="fixed top-[3.25rem] left-1/2 -translate-x-1/2 text-center text-xl font-bold mx-auto h-[3.75rem] w-[18.375rem] flex justify-center items-center tracking-widest z-10 font-encodeSans"
        style={{
          backgroundColor: "#FA8BFF",
          clipPath:
            "polygon(7% 0%, 93% 0%, 100% 30%, 100% 70%, 93% 100%, 7% 100%, 0% 70%, 0% 30%)",
        }}
      >
        RESULT
      </div>

      {/* Back Button */}
      <Link href={"/generate"}
        className="fixed top-18 left-16 bg-transparent flex text-[#FDDAFF] text-xl font-monumenExtended hover:bg-transparent hover:text-white"
       
 
      >
        <Image src={"/assets/images/result-page/back-icon.svg"} alt="Back Button" className="mr-4" width="17" height="25" />
        BACK
      </Link>

      {/* Card */}
      <div
        className="w-full h-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url("/assets/images/result-page/card-bg.png")`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="text-white p-[5rem] grid grid-cols-2 z-10">
            {/* Comic Panel */}
          <div className="relative w-[25rem]">
            <Image
                src="/assets/images/result-page/image-bg.png"
                alt="Image Background"
                className="mt-4 w-[25rem] h-auto object-contain"
                width={500}
                height={500}
              />
              <div className="absolute top-[15.5rem] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent w-[21rem] h-[21.5rem]">
                <ComicPanel {...props} />
              </div>
          </div>
          {/* Summary Text */}
          <div>
            <SummaryText {...props} />
          </div>
        </div>
      </div>
    </div>
  );
}
