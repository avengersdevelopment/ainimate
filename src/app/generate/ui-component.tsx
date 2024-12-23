"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SelectSettingsBox from "./component/SelectSettings";
import SelectCharacter from "./component/SelectCharacter";

import { IUseGenerate } from "../new-landing/useGenerate";
export interface ModalGenerateProps extends IUseGenerate {
  onNewSubmit: () => void;
}

export default function GenerateUIComponent(props: ModalGenerateProps) {
  const router = useRouter();

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#141414] p-[2rem] flex">
      <div className="w-[24rem] h-full flex flex-col">
        {/* Back Button */}
        <Button
          className="bg-transparent text-[#FDDAFF] text-xl font-monumenExtended mb-2 hover:bg-transparent hover:text-white pt-0"
          onClick={() => router.push("/")}
        >
          <Image
            src="/assets/images/result-page/back-icon.svg"
            alt="Back Button"
            className="mr-4"
            width="17"
            height="25"
          ></Image>
          BACK TO HOMEPAGE
        </Button>

        {/* Control-Panel Card */}
        <div className="grow bg-[#FA8BFF0D]/5 w-[24rem] p-6">
          <SelectSettingsBox {...props} />
        </div>
      </div>
      <div className="h-full w-full flex flex-col">
        {/* Title Card Section */}
        <div className="grow items-center justify-center flex flex-col">
          <div className="items-center justify-center flex flex-col relative">
            <div className="absolute rounded-full blur-[9rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FE35FE] size-[12rem]" />
            <div className="absolute top-[-0.5rem] left-[-0.5rem] w-8 h-8 border-t-4 border-l-4 border-[#FA8BFF]"></div>
            <h1 className="text-4xl tracking-wider text-white mb-6 font-monumenExtended">
              AINIMATE GENERATOR
            </h1>

            <p className="max-w-[50rem] text-xl text-gray-200 mb-8 text-center tracking-wider font-encodeSans">
              Bring your vision to life! Create stunning animations effortlessly
              with our AINIMATE Generator. Start your masterpiece now!
            </p>
            <div className="absolute bottom-[-0.5rem] right-[-0.5rem] w-8 h-8 border-b-4 border-r-4 border-[#FA8BFF]" />
          </div>
        </div>

        {/* List of Characters Card */}
        <div className="bg-[#FA8BFF0D]/5 h-[21rem] ml-6 p-6">
          <SelectCharacter {...props} />
        </div>
      </div>
    </div>
  );
}
