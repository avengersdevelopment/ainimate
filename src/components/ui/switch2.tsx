"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch2 = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[2.15vh] w-[5vh] shrink-0 cursor-hover items-center rounded-[0.2rem] border-2 data-[state=checked]:border-[#FA8BFF] data-[state=unchecked]:border-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-[2.4vh] w-[2.6vh] rounded-[0.2rem] data-[state=unchecked]:bg-white data-[state=checked]:bg-[#FA8BFF] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[2.5vh] data-[state=unchecked]:translate-x-[-0.5vh] "
      )}
    />
  </SwitchPrimitives.Root>
));
Switch2.displayName = SwitchPrimitives.Root.displayName;

export { Switch2 };
