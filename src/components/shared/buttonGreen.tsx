import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

export interface ButtonGreenProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  icon?: any;
}

const ButtonGreen = ({ ...rest }: ButtonGreenProps) => {
  return (
    <div
      {...rest}
      style={{
        backgroundImage: "url('/assets/images/bg-button2.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
      className={cn(
        `px-[3vh] cursor-hover relative z-50 text-[3vh] py-[3vh] hover:brightness-125 active:brightness-75  w-fit text-[#6C9E2D] font-black h-fit ${rest.className}`
      )}
    >
      {rest.children}
    </div>
  );
};

export default ButtonGreen;
