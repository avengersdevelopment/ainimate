import React from "react";
import { Button, ButtonProps } from "../ui/button";
import { cn } from "@/lib/utils";

export interface ButtonBGProps extends ButtonProps {
  icon?: any;
  backgroundBtn?: string;
  shadowBtn?: string;
  roundedBtn?: string;
}

const ButtonBG = ({
  backgroundBtn = "bg-black",
  shadowBtn = "shadow-[7px_7px_0px_#672FF3]",
  roundedBtn = "rounded-full",
  ...rest
}: ButtonBGProps) => {
  return (
    <Button
      variant={"transparent"}
      {...rest}
      className={cn(
        `${backgroundBtn} active:brightness-75 hover:brightness-125 font-bold text-white ${roundedBtn} ${shadowBtn} ${rest.className}`
      )}
    >
      {rest.children}
    </Button>
  );
};

export default ButtonBG;
